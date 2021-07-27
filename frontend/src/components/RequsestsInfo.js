import "font-awesome/css/font-awesome.min.css";

function RequestsInfo(props) {

  let age_now;

  const calculate_age = (dob1) => {
    let today = new Date();
    let birthDate = new Date(dob1);  // create a date object directly from `dob1` argument
    age_now = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    if (age_now > 0)
      return `${age_now} year/s`;
    if (m > 0)
      return `${m} month/s`;

    let Difference_In_Time = today.getTime() - birthDate.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return `${Difference_In_Days.toFixed(0)} day/s`;

  }

  return (
    <>
      {props.requests?.petId && <div className="page m-5 m-md-0">
        <div className="container mb-5">
          <div className="row mt-5">
            <div className="row bg-light-custom border-irregular1">
              <div className="row p-4 d-flex justify-content-around">
                <div
                  className="col-12 col-md-4 text-center"
                  style={{ width: "300px" }}
                >
                  <img
                    className="border-irregular1 img-fluid w-100 myimg"
                    src={props.requests.petId.image}
                    alt=""
                  />
                </div>

                <div className="text-center text-md-left col-12 col-md-8 col-lg-4 mt-4">
                  <div className="row">
                    <h4 className="col-12 mb-3">
                      <strong>Request Status:</strong> {props.requests.status}
                    </h4>
                    <h4 className="col-12">
                      <strong>Pet:</strong> {props.requests.petId.name}
                    </h4>
                    <div className="col-sm-6">
                      <ul className="list-unstyled pet-adopt-info">
                        <li className="h7">
                          Gender: <span> {props.requests.petId.gender}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul className="list-unstyled pet-adopt-info">
                        <li className="h7">
                          Age: <span>{calculate_age(props.requests.petId.dateOfBirth)}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul className="list-unstyled pet-adopt-info">
                        <li className="h7">
                          Breed: <span> Poodle</span>
                        </li>
                      </ul>
                    </div>

                    <div className="col-sm-6">
                      <ul className="list-unstyled pet-adopt-info">
                        <li className="h7">
                          Vaccinated: <span> {props.requests.petId.vaccinated}</span>
                        </li>
                      </ul>
                    </div>

                    <div className="col-sm-6">
                      <ul className="list-unstyled pet-adopt-info">
                        <li className="h7">
                          Size: <span> {props.requests.petId.size}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </>
  );
}

export default RequestsInfo;