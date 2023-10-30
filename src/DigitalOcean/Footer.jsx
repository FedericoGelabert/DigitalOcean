
const Footer = () => {
    return (
        <footer className="container mx-auto pb-28">
            <div className="font-inter flex gap-20 justify-center flex-wrap">
                <div>
                    <ul className="footerUl">
                        <li className="footerLi">Company</li>
                        <a src="#">About</a>
                        <a src="#">Leadership</a>
                        <a src="#">Blog</a>
                        <a src="#">Careers</a>
                        <a src="#">Customers</a>
                        <a src="#">Partners</a>
                        <a src="#">Channel Partners</a>
                        <a src="#">Referral Program</a>
                        <a src="#">Affiliate Program</a>
                        <a src="#">Press</a>
                        <a src="#">Legal</a>
                        <a src="#">Privacy Policy</a>
                        <a src="#">Security</a>
                        <a src="#">Investor Relations</a>
                        <a src="#">DO Impact</a>
                        <a src="#">Nonprofits</a>
                    </ul>
                </div>
                <div>
                    <ul className="footerUl">
                        <li className="footerLi">Products</li>
                        <a src="#">Products Overview</a>
                        <a src="#">Droplets</a>
                        <a src="#">Kubernetes</a>
                        <a src="#">Paperspace</a>
                        <a src="#">App Platform</a>
                        <a src="#">Functions</a>
                        <a src="#">Cloudways</a>
                        <a src="#">Managed Databases</a>
                        <a src="#">Spaces</a>
                        <a src="#">Marketplace</a>
                        <a src="#">Load Balancers</a>
                        <a src="#">Block Storage</a>
                        <a src="#">Tools & Integrations</a>
                        <a src="#">API</a>
                        <a src="#">Pricing</a>
                        <a src="#">Documentation</a>
                        <a src="#">Release Notes</a>
                        <a src="#">Uptime</a>
                    </ul>
                </div>
                <div>
                    <ul className="footerUl">
                        <li className="footerLi">Community</li>
                        <a src="#">Tutorials</a>
                        <a src="#">Q&A</a>
                        <a src="#">CSS-Tricks</a>
                        <a src="#">Write for Donations</a>
                        <a src="#">Currents Research</a>
                        <a src="#">Hatch Startup Program</a>
                        <a src="#">Deploy by DigitalOcean</a>
                        <a src="#">Shop Swag</a>
                        <a src="#">Research Program</a>
                        <a src="#">Open Source</a>
                        <a src="#">Code of Conduct</a>
                        <a src="#">Newsletter Signup</a>
                        <a src="#">Meetups</a>
                    </ul>
                </div>
                <div>
                    <ul className="footerUl">
                        <li className="footerLi">Solutions</li>
                        <a src="#">Website Hosting</a>
                        <a src="#">VPS Hosting</a>
                        <a src="#">Web & Mobile Apps</a>
                        <a src="#">Game Development</a>
                        <a src="#">Streaming</a>
                        <a src="#">VPN</a>
                        <a src="#">SaaS Platforms</a>
                        <a src="#">Cloud Hosting for Blockchain</a>
                        <a src="#">Startup Resources</a>
                    </ul>
                </div>
                <div>
                    <ul className="footerUl">
                        <li className="footerLi">Contact</li>
                        <a src="#">Support</a>
                        <a src="#">Sales</a>
                        <a src="#">Report Abuse</a>
                        <a src="#">System Status</a>
                        <a src="#">Share your ideas</a>
                    </ul>
                </div>
            </div>
            <div className="mt-20 flex justify-center">
                <div className="flex justify-between w-10/12">
                    <div className="flex text-do-gray-card items-center tracking-tighter">
                        <img src="https://www.digitalocean.com/_next/static/media/do-logo.d3eb8550.svg" alt="Do logo" className="w-8 h-8 " />
                        <p className="pl-4">© 2023 DigitalOcean, LLC.</p>
                        <p src="#" className="cursor-pointer text-md pl-3">Sitemap.</p>
                        
                    </div>
                    <div className="flex gap-5">
                        <a href="#" className="footerLink"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.0468 10.3155L22.0566 1.00003H20.1585L13.2036 9.08855L7.6488 1.00003H1.24194L9.64196 13.2313L1.24194 23H3.14011L10.4847 14.4583L16.351 23H22.7578L14.0464 10.3155H14.0468ZM11.447 13.3391L10.5959 12.1211L3.82405 2.42968H6.73952L12.2045 10.251L13.0556 11.4689L20.1594 21.6354H17.244L11.447 13.3395V13.3391Z" fill="currentColor"></path></svg></a>
                        <a href="#" className="footerLink"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.44432 1.07693C6.27391 1.13215 5.47464 1.31893 4.77592 1.59349C4.05277 1.87531 3.43984 2.2535 2.83 2.86554C2.22015 3.47758 1.84461 4.09094 1.56476 4.81518C1.29394 5.51545 1.11046 6.31537 1.05876 7.48643C1.00706 8.6575 0.995618 9.03392 1.00134 12.0211C1.00706 15.0083 1.02026 15.3827 1.07702 16.5562C1.1329 17.7264 1.31902 18.5254 1.59358 19.2244C1.87585 19.9475 2.25359 20.5602 2.86586 21.1703C3.47812 21.7803 4.09105 22.155 4.81706 22.4353C5.51666 22.7056 6.31681 22.89 7.48766 22.9413C8.65852 22.9925 9.03538 23.0044 12.0217 22.9987C15.008 22.993 15.384 22.9798 16.5573 22.9241C17.7305 22.8684 18.5254 22.681 19.2246 22.4078C19.9477 22.1248 20.5609 21.7478 21.1705 21.1353C21.7801 20.5228 22.1554 19.909 22.4351 19.1843C22.7061 18.4847 22.8902 17.6846 22.9411 16.5146C22.9923 15.3405 23.0044 14.9656 22.9987 11.9788C22.993 8.99212 22.9796 8.61768 22.9239 7.44463C22.8682 6.27159 22.6819 5.47497 22.4076 4.77558C22.1249 4.05244 21.7475 3.44018 21.1355 2.82968C20.5235 2.21918 19.9092 1.84407 19.1847 1.56511C18.4847 1.29429 17.685 1.10971 16.5141 1.05911C15.3433 1.00851 14.9664 0.995531 11.979 1.00125C8.9916 1.00697 8.6176 1.01973 7.44432 1.07693ZM7.5728 20.9624C6.50029 20.9157 5.91795 20.7375 5.52986 20.5884C5.01594 20.3904 4.64985 20.151 4.26309 19.768C3.87633 19.385 3.63872 19.0176 3.43808 18.5047C3.28738 18.1166 3.10588 17.535 3.05572 16.4625C3.00116 15.3033 2.98972 14.9552 2.98334 12.0184C2.97696 9.08166 2.98818 8.73406 3.039 7.57443C3.08476 6.50281 3.26406 5.91981 3.413 5.53195C3.611 5.01737 3.84949 4.65194 4.23339 4.2654C4.61729 3.87886 4.9836 3.64082 5.49686 3.44018C5.88451 3.28882 6.46619 3.10886 7.53826 3.05782C8.69834 3.00282 9.04594 2.99182 11.9823 2.98544C14.9187 2.97906 15.2672 2.99006 16.4277 3.0411C17.4993 3.08774 18.0825 3.26528 18.47 3.4151C18.9841 3.6131 19.35 3.85092 19.7365 4.23548C20.1231 4.62004 20.3613 4.98503 20.562 5.49939C20.7135 5.88593 20.8935 6.46739 20.9441 7.54011C20.9993 8.70018 21.0119 9.048 21.0171 11.9841C21.0224 14.9203 21.0121 15.269 20.9613 16.4281C20.9144 17.5006 20.7366 18.0832 20.5873 18.4717C20.3893 18.9854 20.1506 19.3517 19.7664 19.7381C19.3823 20.1244 19.0164 20.3624 18.503 20.5631C18.1158 20.7142 17.5334 20.8946 16.4622 20.9456C15.3021 21.0002 14.9545 21.0116 12.0171 21.018C9.0796 21.0244 8.7331 21.0125 7.57302 20.9624M16.5403 6.12089C16.5408 6.38198 16.6186 6.63708 16.764 6.85392C16.9095 7.07076 17.1159 7.2396 17.3573 7.33909C17.5987 7.43859 17.8642 7.46426 18.1202 7.41286C18.3762 7.36147 18.6111 7.23532 18.7954 7.05036C18.9797 6.8654 19.105 6.62995 19.1555 6.37378C19.2059 6.11761 19.1793 5.85223 19.0789 5.61121C18.9785 5.37018 18.8089 5.16434 18.5915 5.01971C18.3742 4.87508 18.1188 4.79816 17.8577 4.79868C17.5077 4.79938 17.1723 4.93907 16.9252 5.18702C16.6782 5.43496 16.5397 5.77088 16.5403 6.12089ZM6.35201 12.011C6.35817 15.1306 8.89172 17.6538 12.0107 17.6478C15.1297 17.6419 17.6546 15.1086 17.6487 11.989C17.6427 8.86936 15.1085 6.34551 11.9891 6.35167C8.86972 6.35783 6.34607 8.8918 6.35201 12.011ZM8.33335 12.007C8.33192 11.2818 8.54557 10.5724 8.94728 9.96865C9.349 9.36486 9.92074 8.89376 10.5902 8.6149C11.2597 8.33605 11.9968 8.26198 12.7084 8.40205C13.4199 8.54212 14.074 8.89005 14.5878 9.40184C15.1016 9.91363 15.4521 10.5663 15.595 11.2773C15.7379 11.9883 15.6668 12.7257 15.3906 13.3962C15.1144 14.0668 14.6455 14.6404 14.0433 15.0445C13.4411 15.4486 12.7326 15.6651 12.0074 15.6665C11.5258 15.6675 11.0488 15.5737 10.6036 15.3903C10.1583 15.2069 9.75351 14.9376 9.41233 14.5978C9.07115 14.258 8.80026 13.8543 8.61513 13.4097C8.43 12.9652 8.33425 12.4886 8.33335 12.007Z" fill="currentColor"></path></svg></a>
                        <a href="#" className="footerLink"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 8.33333H6V12H8.75V23H13.3333V12H16.6718L17 8.33333H13.3333V6.80525C13.3333 5.92983 13.5093 5.58333 14.3554 5.58333H17V1H13.5093C10.213 1 8.75 2.45108 8.75 5.23042V8.33333Z" fill="currentColor"></path></svg></a>
                        <a href="#" className="footerLink"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.6361 5.39641C18.1907 4.73466 16.6648 4.26519 15.0974 4C14.8829 4.38343 14.6888 4.77793 14.516 5.18185C12.8463 4.93025 11.1484 4.93025 9.47883 5.18185C9.30589 4.77797 9.11182 4.38348 8.89742 4C7.32898 4.26743 5.80206 4.73802 4.35518 5.39987C1.48276 9.64968 0.704089 13.7939 1.09342 17.8793C2.77559 19.1222 4.65841 20.0674 6.66004 20.6739C7.11075 20.0677 7.50957 19.4246 7.85227 18.7515C7.20136 18.5083 6.57312 18.2084 5.97481 17.8551C6.13228 17.7409 6.28628 17.6232 6.43509 17.509C8.17602 18.3278 10.0762 18.7523 12 18.7523C13.9238 18.7523 15.8239 18.3278 17.5649 17.509C17.7154 17.6319 17.8694 17.7496 18.0252 17.8551C17.4257 18.209 16.7963 18.5095 16.1442 18.7532C16.4865 19.426 16.8854 20.0686 17.3365 20.6739C19.3398 20.0699 21.2241 19.1251 22.9065 17.8811C23.3634 13.1433 22.1261 9.03712 19.6361 5.39641ZM8.34543 15.3668C7.26048 15.3668 6.36415 14.3823 6.36415 13.171C6.36415 11.9597 7.22934 10.9665 8.34197 10.9665C9.4546 10.9665 10.344 11.9597 10.325 13.171C10.3059 14.3823 9.45114 15.3668 8.34543 15.3668ZM15.6545 15.3668C14.5679 15.3668 13.675 14.3823 13.675 13.171C13.675 11.9597 14.5402 10.9665 15.6545 10.9665C16.7689 10.9665 17.6514 11.9597 17.6324 13.171C17.6133 14.3823 16.7602 15.3668 15.6545 15.3668Z" fill="currentColor"></path></svg></a>
                        <a href="#" className="footerLink"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.54 6.70437C22.2875 5.75802 21.5413 5.01286 20.595 4.7595C18.88 4.29999 12 4.29999 12 4.29999C12 4.29999 5.12 4.29999 3.405 4.7595C2.45875 5.01286 1.7125 5.75802 1.46 6.70437C1 8.42073 1 12 1 12C1 12 1 15.5792 1.46 17.2956C1.7125 18.242 2.45875 18.9871 3.405 19.2405C5.12125 19.7 12 19.7 12 19.7C12 19.7 18.88 19.7 20.595 19.2405C21.5413 18.9871 22.2875 18.242 22.54 17.2956C23 15.5805 23 12 23 12C23 12 23 8.42073 22.54 6.70437ZM9.75 15.2501V8.74984L15.5 12L9.75 15.2501Z" fill="currentColor"></path></svg></a>
                        <a href="#" className="footerLink"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.376 1H2.62403C1.72722 1 1 1.72722 1 2.62403V21.376C1 22.2728 1.72722 23 2.62403 23H21.376C22.2728 23 23 22.2728 23 21.376V2.62403C23 1.72722 22.2728 1 21.376 1ZM7.55722 19.7428H4.24958V9.23472H7.55722V19.7428ZM5.90417 7.78028C4.85153 7.78028 3.9975 6.97819 3.9975 5.88125C3.9975 4.78431 4.85153 3.98222 5.90417 3.98222C6.95681 3.98222 7.81083 4.78431 7.81083 5.88125C7.81083 6.97819 6.95681 7.78028 5.90417 7.78028ZM19.7504 19.7504H16.4428V14.0121C16.4428 12.3193 15.7232 11.7968 14.7943 11.7968C13.8135 11.7968 12.851 12.5347 12.851 14.0549V19.7519H9.54333V9.24236H12.7242V10.6983H12.7669C13.0862 10.0521 14.2046 8.9475 15.9111 8.9475C17.7567 8.9475 19.7504 10.0429 19.7504 13.2513V19.7504Z" fill="currentColor"></path></svg></a>
                        <a href="#" className="footerLink"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.62 19.8572H4.29999C4.29999 21.5929 5.67893 23 7.38001 23H16.62C18.321 23 19.7 21.5929 19.7 19.8572V6.95128C19.7 6.9209 19.6881 6.89178 19.6671 6.87031C19.646 6.84884 19.6175 6.83678 19.5877 6.83678H16.7322C16.7024 6.83678 16.6739 6.84884 16.6528 6.87031C16.6317 6.89178 16.6199 6.9209 16.6199 6.95128L16.62 19.8572ZM16.62 1C18.321 1 19.7 2.40708 19.7 4.14288H7.38001V17.0488C7.38001 17.0792 7.36819 17.1083 7.34715 17.1298C7.32611 17.1513 7.29757 17.1634 7.2678 17.1634H4.41228C4.39753 17.1634 4.38292 17.1604 4.36929 17.1547C4.35566 17.1489 4.34327 17.1405 4.33285 17.1298C4.32242 17.1192 4.31415 17.1065 4.30851 17.0926C4.30287 17.0787 4.29998 17.0638 4.29999 17.0487V4.14288C4.29999 2.40718 5.67893 1 7.38001 1H16.62Z" fill="currentColor"></path></svg></a>
                        <a href="#" className="footerLink"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.77419 1C1.79433 1 1 1.79433 1 2.77419V7.03226H3.12903V3.12903H20.871V20.871H3.12903V16.9677H1V21.2258C1 22.2057 1.79433 23 2.77419 23H21.2258C22.2057 23 23 22.2057 23 21.2258V2.77419C23 1.79433 22.2057 1 21.2258 1H2.77419ZM7.74193 5.73814H10.2467V9.74573H15.0057C15.6974 9.74573 16.2581 10.3064 16.2581 10.9981V17.0095C16.2581 17.7012 15.6974 18.2619 15.0057 18.2619H7.74193V5.73814ZM10.2467 12.2505V15.7571H13.7533V12.2505H10.2467Z" fill="currentColor"></path></svg></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;