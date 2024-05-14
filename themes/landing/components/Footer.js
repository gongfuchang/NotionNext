import { subscribeToNewsletter } from '@/lib/mailchimp'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import CONFIG from '../config'
import Logo from './Logo'
import { siteConfig } from '@/lib/config'
import BLOG from '@/blog.config'

/**
 * 页脚
 */
export default function Footer() {
  const formRef = useRef()
  const [success, setSuccess] = useState(false)
  useEffect(() => {
    const form = formRef.current
    const handleSubmit = (e) => {
      e.preventDefault()
      const email = document.querySelector('#newsletter').value
      subscribeToNewsletter(email).then(response => {
        console.log('Subscription succeeded:', response)
        // 在此处添加成功订阅后的操作
        setSuccess(true)
      })
        .catch(error => {
          console.error('Subscription failed:', error)
          // 在此处添加订阅失败后的操作
        })
    }
    form?.addEventListener('submit', handleSubmit)
    return () => {
      form?.removeEventListener('submit', handleSubmit)
    }
  }, [subscribeToNewsletter])

  return (
        <footer className="border-t border-gray-200 mt-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Top area: Blocks */}
                <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">

                    {/* 1st block */}
                    <div className="sm:col-span-12 lg:col-span-3">
                        <div className="mb-2">
                            <Logo />
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                            <Link href="/terms-of-use" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">服务条款</Link> · <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">隐私政策</Link>
                        </div>
                        <div className="text-sm text-gray-600">
                        &copy; Dantech inc., 2023-2024
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className="sm:col-span-8 md:col-span-3 lg:col-span-3">
                        <h6 className="text-gray-800 font-medium mb-2">产品</h6>
                        <ul className="text-sm">
                            <li className="mb-2">
                                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Quick Assistant | 智能助理</a>
                            </li>
                            <li className="mb-2">
                                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Quick Search | 知识搜索</a>
                            </li>
                            <li className="mb-2">
                                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Quick Analyser | 智能解数</a>
                            </li>
                            <li className="mb-2">
                                {/* <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Vercel</a> */}
                            </li>
                            <li className="mb-2">
                                {/* <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Github</a> */}
                            </li>
                            <li className="mb-2">
                                {/* <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Notion</a> */}
                            </li>
                            <li className="mb-2">
                                {/* <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">NextJs</a> */}
                            </li>
                        </ul>
                    </div>

                    {/* 3rd block */}
                    <div className="sm:col-span-4 md:col-span-3 lg:col-span-2">
                        <h6 className="text-gray-800 font-medium mb-2">资源</h6>
                        <ul className="text-sm">
                            <li className="mb-2">
                                <a href={BLOG.DOCS} className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">技术文档</a>
                            </li>
                            <li className="mb-2">
                                <a href="/article/custom-stories" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">客户案例</a>
                            </li>
                            <li className="mb-2">
                                <a href="/article/partners" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">合作方</a>
                            </li>
                        </ul>
                    </div>

                    {/* 4th block */}
                    <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
                        <h6 className="text-gray-800 font-medium mb-2">企业</h6>
                        <ul className="text-sm">
                            <li className="mb-2">
                                <a href="/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">主页</a>
                            </li>
                            <li className="mb-2">
                                <a href="/article/about" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">关于我们</a>
                            </li>
                            <li className="mb-2">
                                <a href="/article/address" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">公司地址</a>
                            </li>
                            <li className="mb-2">
                                <a href="/article/privacy" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">隐私政策</a>
                            </li>
                        </ul>
                    </div>

                    {/* 开启邮件收集 */}
                    {JSON.parse(siteConfig('LANDING_NEWSLETTER', null, CONFIG)) && <>
                        {/* 5th block */}
                        <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
                            <h6 className="text-gray-800 font-medium mb-2">Subscribe</h6>
                            <p className="text-sm text-gray-600 mb-4">Get the latest news and articles to your inbox every month.</p>
                            <form ref={formRef}>
                                <div className="flex flex-wrap mb-4">
                                    <div className="w-full">
                                        <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                                        <div className="relative flex items-center max-w-xs">
                                            <input disabled={success} id="newsletter" type="email" className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder="Your email" required />
                                            <button disabled={success} type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
                                                <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                                                <svg className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                                                </svg>
                                            </button>
                                        </div>
                                        {/* Success message */}
                                        {success && <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p>}
                                    </div>
                                </div>
                            </form>
                        </div>

                    </>}
                </div>

            </div>
        </footer>
  )
}
