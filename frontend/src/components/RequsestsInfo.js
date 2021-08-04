import "font-awesome/css/font-awesome.min.css";

function RequestsInfo(props) {

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

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
      return `${age_now} Year`;
    if (m > 0)
      return `${m} Month`;

    let Difference_In_Time = today.getTime() - birthDate.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return `${Difference_In_Days.toFixed(0)} Day`;

  }

  return (
    <>
      {props.requests?.petId &&
        <tr>
          <td>
            <img className="rounded-circle" src={props.requests.petId.image} alt="pet" width="40px" height="40px" />
          </td>
          <td>{capitalizeFirstLetter(props.requests.petId.name)}</td>
          <td>{capitalizeFirstLetter(props.requests.petId.gender)}</td>
          <td>{calculate_age(props.requests.petId.dateOfBirth)}</td>
          <td>{capitalizeFirstLetter(props.requests.petId.vaccinated)}</td>
          <td>{props.requests.petId.size}</td>
          <td>{capitalizeFirstLetter(props.requests.status)}</td>
        </tr>}
    </>
  );
}

export default RequestsInfo;
