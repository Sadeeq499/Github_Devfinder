import React,{useEffect,useState} from "react";
import { BsSearch } from "react-icons/bs";
import Images from "../assets/Index";
import {fetchedData} from '../Redux/actions'
import {useDispatch,useSelector} from 'react-redux'

function Main() {

  const dispatch = useDispatch()
  const [username, setUsername] = useState("sadeeq499")
  const data = useSelector(state => state.GithubReducer.user.data)
  console.log(data)
  useEffect(() => {
    dispatch(fetchedData(username))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchedData(username))
  }


  return (
    <div>
      {/*  main container*/}
      <div className="flex flex-col mx-auto max-w-5xl my-10">
        {/* title and dark mode */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            DevFinder
          </h1>
          <button className="  rounded-full w-10 h-10 flex justify-center items-center">
            <img src={Images.Moon} alt="moon" className="w-6 h-6" />
          </button>
        </div>

        {/* search bar */}
        <form  onSubmit={handleSubmit} className="flex flex-row rounded-2xl h-20 my-5 bg-[#1e2a47]  justify-between">
          {/* search icon and input */}
          <div className="flex flex-row space-x-6 ">
            <div className="flex justify-center items-center rounded-l-lg w-16">
              <BsSearch className="text-2xl text-blue-400" />
            </div>
            <input
              type="text"
              value={username}
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Search Github username"
              className="bg-[#1e2a47] text-white outline-none w-[600px]"
            />
          </div>

          {/* search button */}
          <button className="bg-blue-600 rounded-2xl w-28 mt-2 h-16 mr-2 flex justify-center items-center text-white">
            Search
          </button>
        </form>

        {/* detail board */}
        <div className=" relative rounded-xl bg-[#1e2a47]">

            {/* avatar */}
            <div className="absolute top-24 left-14  w-40 h-40">
              <img
                src={data?.avatar_url}
                alt="avatar"
                className="w-40 h-40 rounded-full "
              />
            </div>

          <div className="mx-auto flex justify-center items-center my-20">
            {/* github user detial */}
            <div className=" ml-40 flex flex-col   ">
              <div className="flex flex-row justify-between space-x-96">
                <h1 className="text-white font-bold">{data?.name}</h1>
                <h1 className="text-gray-200">joined {
                      new Date(data?.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
                }</h1>
              </div>

              {/* name */}
              <h1 className="text-blue-500 my-3">{data?.login}</h1>
              <h1 className="text-gray-300 w-96">{
                data?.bio ? data?.bio : "This profile has no bio"
              }</h1>

              {/* repo followers and following */}
              <div className="bg-[#0b012e] rounded-xl mt-10">
                <div className="flex flex-row justify-between items-center p-5 pb-2 ">
                  <h1 className="text-gray-300">Repos</h1>
                  <h1 className="text-gray-300">Followers</h1>
                  <h1 className="text-gray-300">Following</h1>
                </div>
                <div className="flex flex-row justify-between p-5 pt-0 ">
                  <h1 className="text-white font-bold">{
                    data?.public_repos
                  }</h1>
                  <h1 className="text-white font-bold">{
                    data?.followers
                  }</h1>
                  <h1 className="text-white font-bold">{
                    data?.following
                  }</h1>
                </div>
              </div>

              {/* general info */}
              <div className="flex flex-col space-y-5 mt-10 mr-24">

                {/* location and twitter */}
                <div className="flex flex-row  justify-between">
                  <span className="flex flex-row space-x-5">
                    <img src={Images.Location} className=" brightness-0 invert w-5 h-auto" />
                    <h1 className="text-white text-xl"> {
                      data?.location ? data?.location : "Not Available"
                    }</h1>
                  </span>
                  <span className="flex flex-row space-x-5 ">
                    <img src={Images.Twitter} className=" brightness-0 invert w-6 h-6" />
                    <a  href="https://twitter.com/Oyee____SaQi" className="text-white text-xl"> {
                      data?.twitter_username ? data?.twitter_username : "Not Available"
                    }</a>
                  </span>
                </div>
                {/* website and company */}
                <div className="flex flex-row  justify-between">
                  <span className="flex flex-row space-x-5">
                    <img src={Images.Website} className=" brightness-0 invert " />
                    <a href="https://mrsadeeq.carrd.co/" className="text-white text-xl">{
                      data?.blog ? data?.blog : "Not Available"
                    }</a>
                  </span>
                  <span className="flex flex-row space-x-5 ">
                    <img src={Images.Company} className=" brightness-0 invert w-auto h-auto" />
                    <a href="https://techemulsion.com/" className="text-white text-xl">{
                      data?.company ? data?.company : "Not Available"
                    }</a>
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
