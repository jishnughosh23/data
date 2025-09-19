import React from 'react'
import { useForm } from 'react-hook-form'

interface FormData {
  SName: string;
  SAddress: {
    city: string;
    state: string;
  };
  email: string;
}

const SimpleForm: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<FormData>({
    defaultValues: {
      SName: "",
      SAddress: { city: "", state: "" },
      email: "",
    }
  })

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Form submitted:', data)
    alert('Form submitted successfully!')
    // Reset form or handle post-submission logic here
    setTimeout(() => {window.location.reload()}, 100);
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Simple Form</h2>
      
      <div className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input 
            type="text" 
            {...register("SName", { 
              required: "Name is required",
              minLength: { value: 2, message: "Name must be at least 2 characters" }
            })} 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your name"
          />
          {errors.SName && (
            <p className="mt-1 text-sm text-red-600">{errors.SName.message}</p>
          )}
        </div>

        {/* Address Fields */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input 
            type="text" 
            {...register("SAddress.city", { 
              required: "City is required" 
            })} 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your city"
          />
          {errors.SAddress?.city && (
            <p className="mt-1 text-sm text-red-600">{errors.SAddress.city.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            State
          </label>
          <input 
            type="text" 
            {...register("SAddress.state", { 
              required: "State is required" 
            })} 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your state"
          />
          {errors.SAddress?.state && (
            <p className="mt-1 text-sm text-red-600">{errors.SAddress.state.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input 
            type="email" 
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })} 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button 
          type="button" 
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  )
}

export default SimpleForm