import React, { useCallback } from "react"
import { useForm } from "react-hook-form"
import { Input, RTE, Select, Button } from "../components/import_component" 
import services from "../appwrite/database_services"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues, reset } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  })
  const navigate = useNavigate()
  const userData = useSelector((state) => state.auth.userData)

  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? await services.UploadFile(data.image[0]) : null
      if (file) {
        services.DeleteFile(post.featured_Image) 
      }
      const dbPost = await services.updatePost(post.$id, {
        ...data,
        featured_Image: file ? file.$id : undefined,
      })
      if (dbPost) {
        console.log("Post updated successfully", dbPost)
        navigate(`/post/${dbPost.$id}`)
      }
    } else {
      const file = await services.UploadFile(data.image[0])
      if (file) {
        const fileId = file.$id
        data.featured_Image = fileId
        const dbPost = await services.createPost({ ...data, user_id: userData.$id })
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`)
        }
      }
    }
    alert("Post added successfully ")
    reset({ title: "", slug: "", content: "", status: "active", image: null })
  }

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-")
    return ""
  }, [])

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true })
      }
    })
    return () => subscription.unsubscribe()
  }, [watch, slugTransform, setValue])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-8">
      <form
        onSubmit={handleSubmit(submit)}
        className="w-full max-w-5xl bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden p-8 flex flex-wrap -mx-2"
      >
       
        <div className="w-full lg:w-2/3 px-2 mb-6 lg:mb-0">
          <Input
            label="Title :"
            placeholder="Enter post title"
            className="mb-4 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
            {...register("title", { required: true })}
          />
          <Input
            label="Slug :"
            placeholder="Auto-generated slug"
            className="mb-4 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
            {...register("slug", { required: true })}
            onInput={(e) => {
              setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true })
            }}
          />
          <div className="mb-4">
            <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/3 px-2">
          <Input
            label="Featured Image :"
            type="file"
            className="mb-4 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
          />
          {post && (
            <div className="w-full mb-4 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <img
                src={services.getFileUrl(post.featured_Image) || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
          <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-4 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-50 focus:bg-white"
            {...register("status", { required: true })}
          />
          <Button
            type="submit"
            className={`w-full font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:ring-4 focus:ring-blue-200 shadow-lg ${
              post
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
            }`}
          >
            {post ? "Update Post" : "Submit Post"}
          </Button>
        </div>
      </form>
    </div>
  )
}
