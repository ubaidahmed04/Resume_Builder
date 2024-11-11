"use client"
import React, { useState } from 'react'
import { InputDefault } from '@/Components'
import { Button, Textarea } from '@material-tailwind/react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Resume1 } from "@/Components/Resume1"
import { Resume2 } from "@/Components/Resume2"
// Validation schema using Yup
const validationSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  phone: Yup.string().required('Phone Number is required'),
  designation: Yup.string().required('Designation is required'),
  location: Yup.string().required('Location is required'),
  lastAcademic: Yup.string().required('Last Academic is required'),
  lastAcademicYear: Yup.number().required('Last Academic Year is required').typeError('Must be a number'),
  collegeName: Yup.string().required('College Name is required'),
  yearOfCollege: Yup.number().required('Year of College is required').typeError('Must be a number'),
  linkedIn: Yup.string().url('Invalid URL').required('LinkedIn URL is required'),
  description: Yup.string().required('Description is required'),
})

const ResumeForm = () => {
  const [skills, setSkills] = useState([''])
  const [links, setLinks] = useState([''])

  const addSkillInput = () => setSkills([...skills, ''])
  const addLinkInput = () => setLinks([...links, ''])

  return (
    <>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          phone: '',
          designation: '',
          location: '',
          lastAcademic: '',
          lastAcademicYear: '',
          collegeName: '',
          yearOfCollege: '',
          linkedIn: '',
          description: '',
          skills: [],
          links: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log('Form Data', values)}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="flex flex-col items-center h-full w-full">
            <span className="text-xl font-bold py-8">RESUME FORM</span>
            <span className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Main Fields */}

              <span>
                <Field name="fullName" as={InputDefault} type="text" placeholder="Enter your Full Name" label="Full Name" />
                <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
              </span>


              <span>
                <Field name="email" as={InputDefault} type="email" placeholder="Enter your Email" label="Email" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </span>


              <span>
                <Field name="phone" as={InputDefault} type="text" placeholder="Enter your Number" label="Phone Number" />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
              </span>


              <span>
                <Field name="designation" as={InputDefault} type="text" placeholder="Enter your Designation" label="Designation" />
                <ErrorMessage name="designation" component="div" className="text-red-500 text-sm" />
              </span>


              <span>
                <Field name="location" as={InputDefault} type="text" placeholder="Enter your location" label="Location" />
                <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />
              </span>


              <span>
                <Field name="lastAcademic" as={InputDefault} type="text" placeholder="Enter your last Academic" label="Last Academic" />
                <ErrorMessage name="lastAcademic" component="div" className="text-red-500 text-sm" />
              </span>

              <span>
                <Field name="lastAcademicYear" as={InputDefault} type="number" placeholder="Last Academic Year" label="Last Academic Year" />
                <ErrorMessage name="lastAcademicYear" component="div" className="text-red-500 text-sm" />
              </span>

              <span>
                <Field name="collegeName" as={InputDefault} type="text" placeholder="College Name" label="College Name" />
                <ErrorMessage name="collegeName" component="div" className="text-red-500 text-sm" />
              </span>

              <span>
                <Field name="yearOfCollege" as={InputDefault} type="number" placeholder="Passing Year of College" label="Year of College" />
                <ErrorMessage name="yearOfCollege" component="div" className="text-red-500 text-sm" />
              </span>

              <span>
                <Field name="linkedIn" as={InputDefault} type="text" placeholder="LinkedIn URL" label="LinkedIn URL" />
                <ErrorMessage name="linkedIn" component="div" className="text-red-500 text-sm" />
              </span>

              <span className='col-span-2'>
                <Field as={Textarea} name="description" placeholder="Describe Yourself" className="col-span-2" />
                <ErrorMessage name="description" component="div" className="text-red-500 text-sm col-span-2" />
              </span>
              {/* Dynamic Skills Fields */}

              <div className="col-span-1 gap-2 flex flex-col items-start">
                {skills.map((skill, index) => (
                  <InputDefault
                    key={index}
                    type="text"
                    placeholder="Skill"
                    label={`Skill ${index + 1}`}
                    value={values.skills[index] || ''}
                    onChange={(e) => handleChange(`skills[${index}]`)(e)}
                    className="mb-2"
                  />
                ))}
                <Button onClick={addSkillInput} type="button" className="w-44 h-12">
                  Add Skill
                </Button>
              </div>

              {/* Dynamic Links Fields */}
              <div className="col-span-1 gap-2 flex flex-col items-start">
                {links.map((link, index) => (
                  <InputDefault
                    key={index}
                    type="text"
                    placeholder="Account Link"
                    label={`Account Link ${index + 1}`}
                    value={values.links[index] || ''}
                    onChange={(e) => handleChange(`links[${index}]`)(e)}
                    className="mb-2"
                  />
                ))}
                <Button onClick={addLinkInput} type="button" className="w-44 h-12">
                  Add More Links
                </Button>
              </div>

              {/* Submit Button */}
              <span className="col-span-2  flex justify-center items-center">
                <Button fullWidth type="submit" className="ml-auto w-44 h-12 bg-blue-600 text-black">
                  Generate
                </Button>
              </span>
            </span>
          </Form>

        )}
      </Formik>
      <span className='px-10 flex justify-between '>
        <span>
          <Button fullWidth type="submit" className="ml-auto w-44 h-12 bg-blue-gray-300 text-black">
            Edit 
          </Button>
        </span>
        <span>
          <Button fullWidth type="submit" className="ml-auto w-44 h-12 bg-green-400 text-black">
            Download  
          </Button>
        </span>
        
      </span>
      <span>
        <Resume1 />
      </span>
    </>
  )
}

export default ResumeForm
