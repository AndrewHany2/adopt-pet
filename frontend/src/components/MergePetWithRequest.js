import React, { useEffect, useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import RequestsInfo from "./RequsestsInfo";
function MergePetWithRequest(props) {
  let [mergedObjects, setMergedObjects] = useState([{}]);

  const requests = props.info.requestsInfo;
  const pets = props.info.petsInfo;
  useEffect(() => {
    let objs = [];
    for (let i = 0; i < requests.length; i++) {
      for (let j = 0; j < pets.length; j++) {
        if (requests[i].petId === pets[j]._id) {
          delete requests[j]._id;
          let mergedObj = { ...requests[i], ...pets[j] };
          objs = mergedObjects;
          objs.push(mergedObj);
          setMergedObjects(objs);
          console.log("here")
          console.log(mergedObj)
        //   console.log(mergedObjects)
        //   console.log(objs)


        }
      }
    }
    console.log(objs)
    
    
  }, [mergedObjects]);

  

  return (
    <>
     {console.log("Merged")}
     {console.log(mergedObjects)}
     {mergedObjects ? (
        mergedObjects.map((obj) => { return <RequestsInfo key={obj._id} info={obj} />
        })
      ) : (
        <h1 className="alert alert-primary">No Requests Yet</h1>
      )}
    </>
  );
}

export default MergePetWithRequest;
