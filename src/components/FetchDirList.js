import axios from "axios"
import React, { useState, useEffect } from "react"

import foldericon from "../utils/outline_folder_white_24dp.png";
import fileicon from "../utils/outline_description_white_24dp.png";
import imageicon from "../utils/outline_image_white_24dp.png";

import getFileExtension from "../utils/getFileExtension";
import GetDirdata from "./GetDirData";

const baseUrl = "https://fnp5vd20r2.execute-api.us-east-1.amazonaws.com/dev/directories"


const FetchDirList = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        const apiData = response.data //retrieve values from json object coming from api
        // console.log(apiData)
        setData(apiData)
      })
      .catch(err => console.log(err))
  }, [])

  return (

    <><>     </><>
      {data && Object.keys(data).map((file) => (
        <nav className="item-container" key={file.id}>
          <h1 key={data.name}>{data.name}</h1>
          <ul className="files" key={file}>

            <>{data.files.map(f => (
              <li key={f.id}>
                {(function () {
                  if (getFileExtension(f.name) === 'jpg') {
                    return (
                      <img alt="" src={imageicon}></img>
                    )
                  } else {
                    return (
                      <img alt="" src={fileicon}></img>
                    )
                  }
                })()}
                {(function () {

                  if (f.name.length > 10) {
                    const newStr = f.name.slice(0, -12) + '...';
                    return (
                      <p key={f.newStr}>{newStr}</p>
                    )
                  }
                  return (
                    <p key={f.name}>{f.name}</p>
                  )

                })()}

              </li>
            )
            )}
            </>
            <>
              {data.directories.map(d => (
                <li key={d.id} onClick={GetDirdata(d.id)}>
                  <img alt="" src={foldericon}></img>
                  <p key={d.name}>{d.name}</p>

                </li>
              ))}
            </>


          </ul>
        </nav>
      ))}
    </></>

  )
}

export default FetchDirList

