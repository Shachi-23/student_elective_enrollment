// 'use client'

// import { useState } from 'react'
// import Button from './ui/button';
// import Checkbox from './ui/checkbox';
// import Input from './ui/input';


// import { UserCircle } from "lucide-react"

// export default function SignInForm() {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const [rememberMe, setRememberMe] = useState(false)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Handle form submission
//     console.log('Form submitted', { username, password, rememberMe })
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-100 via-blue-100 to-pink-100">
//       <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg backdrop-blur-md w-80">
//         <div className="flex flex-col items-center mb-6">
//           <UserCircle className="w-16 h-16 text-teal-600 mb-2" />
//           <h2 className="text-2xl font-semibold text-gray-800">Sign In</h2>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             <Input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-3 py-2 bg-white bg-opacity-80 rounded-md"
//             />
//             <Input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 bg-white bg-opacity-80 rounded-md"
//             />
//             <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md transition duration-300">
//               Login
//             </Button>
//             <div className="flex items-center justify-between text-sm">
//               <div className="flex items-center">
//                 <Checkbox
//                   id="remember"
//                   checked={rememberMe}
//                   onCheckedChange={(checked) => setRememberMe(checked)}
//                   className="mr-2"
//                 />
//                 <label htmlFor="remember" className="text-gray-600">Remember me</label>
//               </div>
//               <a href="#" className="text-teal-600 hover:underline">Forgot Password?</a>
//             </div>
//           </div>
//         </form>
//         <div className="mt-6 text-center text-sm">
//           <span className="text-gray-600">Don't have an account? </span>
//           <a href="#" className="text-teal-600 hover:underline">REGISTER HERE</a>
//         </div>
//       </div>
//     </div>
//   )
// }