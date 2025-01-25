import './assets/scss/style.scss'
// import 'react-toastify/dist/ReactToastify.css';

// const Wrapper = ({children}) => {
//   const location = useLocation();
//   useLayoutEffect(() => {
//     document.documentElement.scrollTo(0, 0);
//   }, [location.pathname]);
//   return children
// }  
function App() {
  return (
    // <Wrapper>
      // <ParallaxProvider>
        // <Routes>
          <Route path="/" element={<Default />}>
            <Route index element={<Home />}/>
            <Route path="/case" element={<Case />}/> 
            <Route path="/services" element={<Services />}/>
            <Route path="/services/:slug" element={<ServiceDetails />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/news" element={<News />}/>
            <Route path="news/:hash" element={<NewsDetails/>}/>
            {/* <Route path="news/:hash" element={<NewsDetailsFetch />}/> */}
          </Route>
          <Route path="*" element={<NotFound />}/>
          <Route path="/" element={<DarkLayout />}>
            <Route path="/contacts" element={<Contacts />}/>
          </Route>
        // </Routes>
      // </ParallaxProvider>
      // <ToastContainer theme="dark" pauseOnHover position="bottom-left"/>
    // </Wrapper>
  )
}

export default App;

