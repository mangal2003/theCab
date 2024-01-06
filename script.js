function menuUnfold() {
  let icons = document.getElementById("iconWrapper");
  icons.style.display = "block";
  let opener = document.getElementById("opening");
  opener.style.display = "none";
  let closer = document.getElementById("closing");
  closer.style.display = "block";
}
function menuFold() {
  let icons = document.getElementById("iconWrapper");
  icons.style.display = "none";
  let opener = document.getElementById("opening");
  opener.style.display = "block";
  let closer = document.getElementById("closing");
  closer.style.display = "none";
}
function userDetails() {
  alert("User not logged in! Please sign in/sign up.");
}
var listShow = 1;
function cabBooking() {
  let cabAvailAPI = fetch("https://cab-booking2.p.rapidapi.com/cab/view", {
    method: "POST",
    headers: {
      "X-RapidAPI-Key": "76fbc6ae6emsh46851ddef1a7808p1731cdjsn83eaf099c9dd",
      "X-RapidAPI-Host": "cab-booking2.p.rapidapi.com",
    },
  });
  cabAvailAPI
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let cabList = document.getElementById("cabListWrapper");
      cabList.style.display = "block";
      let arr = data.details;
      arr.forEach((element) => {
        let cabId = element._id;
        let regNo = element.vehicleRegisterNumber;
        let type = element.vehicleModel;
        let fare_km = element.rupeesPerKM;
        let capacity = element.vehicleCapacity;
        var listWrapper = document.querySelector("#cabListWrapper");
        if (listShow) {
          listWrapper.insertAdjacentHTML(
            "beforeend",
            `
            <div class="cabListItem" id="cabList">
            <div class="forCabId">Cab ID : ${cabId}</div>
            <div class="forCabRegNum">Vehicle Reg. No. : ${regNo}</div>
            <div class="forDetails"> Vehicle Type : ${type}<br>Fare per KM : ${fare_km} <br>Capacity : ${capacity}</div>
            </div>
            `
          );
        }
      });
      listShow = 0;
    })
    .catch((err) => {
      console.log(err);
      listWrapper.insertAdjacentHTML(
        "beforeend",
        `
        <div class="cabListItem" id="cabList">
        ${err.errors}
        </div>
      `
      );
    });
}
function userSignIn_Up() {
  let s_up_page = document.getElementById("signUpUser");
  s_up_page.style.display = "flex";
}
function service() {
  alert("Currently no service is available... Try later.!");
}
function driverSignUp() {
  let firstWind = document.getElementById("first");
  firstWind.style.display = "flex";
}
function driverSignUp2() {
  let drvName = document.getElementById("driverName").value;
  let drvMobile = document.getElementById("driverMobNo").value;
  let drvEmail = document.getElementById("driverEmail").value;
  // console.log("first done \nData collected is as below:");
  // console.log("Name of Driver : " + drvName);
  // console.log("Mobile no. of Driver : " + drvMobile);
  // console.log("Email of Driver : " + drvEmail);
  let firstWind = document.getElementById("first");
  firstWind.style.display = "none";
  let secondWind = document.getElementById("second");
  secondWind.style.display = "flex";
}
function driverSignUp3() {
  let drvLcsNo = document.getElementById("driverLicenseNumber").value;
  let vhcRegNo = document.getElementById("vehicleRegisterNumber").value;
  let vhcType = document.getElementById("vehicleType").value;
  // console.log("Second done \n Data collected is as below:");
  // console.log("Driver License Number : " + drvLcsNo);
  // console.log("Vehicle Register Number : " + vhcRegNo);
  // console.log("Vehicle type : " + vhcType);
  let secondWind = document.getElementById("second");
  secondWind.style.display = "none";
  let thirdWind = document.getElementById("third");
  thirdWind.style.display = "flex";
}
function driverSignUpAPI() {
  let thirdWind = document.getElementById("third");
  thirdWind.style.display = "none";
  let fourthWind = document.getElementById("fourth");
  fourthWind.style.display = "flex";

  var drvrName = document.getElementById("driverName").value;
  var drvrMobNo = Number.parseInt(document.getElementById("driverMobNo").value);
  var drvrEmail = document.getElementById("driverEmail").value;
  var drvrLicNo = document.getElementById("driverLicenseNumber").value;
  var isAvail = Boolean(document.getElementById("vehAvailable").value);
  var drvrPhoto =
    "https://images.newindianexpress.com/uploads/user/imagelibrary/2023/4/3/w900X450/Bike1.jpg?w=400&dpr=2.6";
  var minFareKM = Number.parseInt(document.getElementById("fare_km").value);
  var vehModel = "auto";
  var mnfYear = 2023;
  var vehRegNo = document.getElementById("vehicleRegisterNumber").value;
  var capacity = Number.parseInt(document.getElementById("memCapacity").value);

  let apiCab = fetch("https://cab-booking2.p.rapidapi.com/index/driversignup", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "76fbc6ae6emsh46851ddef1a7808p1731cdjsn83eaf099c9dd",
      "X-RapidAPI-Host": "cab-booking2.p.rapidapi.com",
    },
    body: JSON.stringify({
      driverName: drvrName,
      driverContactNumber: drvrMobNo,
      driverEmail: drvrEmail,
      driverLicenseNumber: drvrLicNo,
      isAvailable: isAvail,
      driverPhoto: drvrPhoto,
      minFarePerKM: minFareKM,
      vehicleModel: vehModel,
      manufactureYear: mnfYear,
      vehicleRegisterNumber: vehRegNo,
      membersCapacity: capacity,
    }),
  });

  apiCab
    .then((response) => {
      return response.json(); // Parse the response as JSON
    })
    .then((data) => {
      if (!data.success) {
        // console.log(data.error_message);
        // console.log(data.errors);
        let numBtn1 = document.getElementById("numBtn1");
        let numBtn2 = document.getElementById("numBtn2");
        let numBtn3 = document.getElementById("numBtn3");
        numBtn1.style.color = "rgb(255, 0, 0)";
        numBtn2.style.color = "rgb(255, 0, 0)";
        numBtn3.style.color = "rgb(255, 0, 0)";
        numBtn1.style.border = "2px solid rgb(255, 0, 0)";
        numBtn2.style.border = "2px solid rgb(255, 0, 0)";
        numBtn3.style.border = "2px solid rgb(255, 0, 0)";
        let verified = document.getElementById("verified");
        verified.innerHTML = `UNABLE TO REGISTER YOU <br><br>${data.errors}`;
        verified.style.backgroundColor = "crimson";
      } else {
        // console.log(data.status);
        // console.log(data.message);
        let numBtn1 = document.getElementById("numBtn1");
        let numBtn2 = document.getElementById("numBtn2");
        let numBtn3 = document.getElementById("numBtn3");
        numBtn1.style.color = "rgb(0, 255, 0)";
        numBtn2.style.color = "rgb(0, 255, 0)";
        numBtn3.style.color = "rgb(0, 255, 0)";
        numBtn1.style.border = "2px solid rgb(0, 255, 0)";
        numBtn2.style.border = "2px solid rgb(0, 255, 0)";
        numBtn3.style.border = "2px solid rgb(0, 255, 0)";
        let verified = document.getElementById("verified");
        verified.innerHTML = `REGISTERED<br><br>Status : <br> ${data.status} <br>
        Driver ID :<br> ${data.message}`;
      }
    })
    .catch((error) => {
      // console.error("Error:", error);
      alert(error);
    });
}
function cancle1() {
  let card = document.getElementById("first");
  card.style.display = "none";
}
function cancle2() {
  let card = document.getElementById("second");
  card.style.display = "none";
}
function cancle3() {
  let card = document.getElementById("third");
  card.style.display = "none";
}
function cancle4() {
  let card = document.getElementById("fourth");
  card.style.display = "none";
}
function back2second() {
  let secondWind = document.getElementById("second");
  let thirdWind = document.getElementById("third");
  secondWind.style.display = "flex";
  thirdWind.style.display = "none";
}
function back2first() {
  let firstWind = document.getElementById("first");
  let secondWind = document.getElementById("second");
  firstWind.style.display = "flex";
  secondWind.style.display = "none";
}

function cancleList() {
  let list = document.getElementById("cabListWrapper");
  list.style.display = "none";
}
function cancleS_UP() {
  let s_up_page = document.getElementById("signUpUser");
  s_up_page.style.display = "none";
}
function cancleS_UP_verify() {
  let s_up_v = document.getElementById("signUpUserVerify");
  s_up_v.style.display = "none";
}
function userSignUpAPI() {
  let mobNumber = document.getElementById("mobNoUserS-UP").value;
  let signUpRequest = fetch(
    `https://cab-booking2.p.rapidapi.com/signup/generateotp`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "76fbc6ae6emsh46851ddef1a7808p1731cdjsn83eaf099c9dd",
        "X-RapidAPI-Host": "cab-booking2.p.rapidapi.com",
      },
      body: JSON.stringify({
        mobileNumber: mobNumber,
      }),
    }
  );
  signUpRequest
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      let otpShow = document.getElementById("otpUserSUP");
      otpShow.style.display = "block";
      let status = document.getElementById("status");
      let message = document.getElementById("message");
      let otp = document.getElementById("otp");
      status.innerText = data.status;
      message.innerText = data.message;
      otp.innerText = data.otp;
      let otpPage = document.getElementById("signUpUser");
      otpPage.style.display = "none";
      let verifyPage = document.getElementById("signUpUserVerify");
      if (data.success) {
        verifyPage.style.display = "block";
      } else {
        message.innerText = data.error_message;
      }
    })
    .catch((err) => {
      let otpShow = document.getElementById("otpUserSUP");
      otpShow.innerText = "Some error occured..!";
    });
}
function userSignInPage() {
  let signInCard = document.getElementById("signInUser");
  signInCard.style.display = "block";
  let signUpCard = document.getElementById("signUpUser");
  signUpCard.style.display = "none";
}
function cancleOTPuser() {
  let otpBox = document.getElementById("otpUserSUP");
  otpBox.style.display = "none";
}
function userSignUpAPIVerify() {
  let verifyPage = document.getElementById("signUpUserVerify");
  verifyPage.style.display = "none";
  let otpPage = document.getElementById("otpUserSUP");
  otpPage.style.display = "none";
  let mobNum = document.getElementById("mobNoUserS-UP-verify").value;
  let otp = document.getElementById("otpUserS-UP-verify").value;

  let verified = fetch(
    "https://cab-booking2.p.rapidapi.com/signup/validateotp",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "76fbc6ae6emsh46851ddef1a7808p1731cdjsn83eaf099c9dd",
        "X-RapidAPI-Host": "cab-booking2.p.rapidapi.com",
      },
      body: JSON.stringify({
        mobileNumber: mobNum,
        otp: otp,
      }),
    }
  );

  verified
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data.success);
      let card = document.getElementById("verifiedSignUp");
      card.style.display = "block";
      if (data.success) {
        // console.log(data.message);
        let message = document.getElementById("messageVer");
        message.innerText = data.message;
        let token = document.getElementById("otpVer");
        token.innerText = data.token;
        // console.log(data.token);
      } else {
        // console.log(data.errors);
        card.innerHTML = `${data.errors} <br> 
        <i class="ri-close-circle-fill NextBtn" id="cancleBtn" onclick="cancleVerifiedUserPage()"></i>`;
      }
    })
    .catch((error) => {
      // console.error("Error:", error);
      alert(error);
    });
}
function cancleVerifiedUserPage() {
  let card = document.getElementById("verifiedSignUp");
  card.style.display = "none";
}
function userSignInAPI() {
  let mob = document.getElementById("mobNoUserS-In").value;
  let signInAPI = fetch(
    "https://cab-booking2.p.rapidapi.com/signin/generateotp",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "76fbc6ae6emsh46851ddef1a7808p1731cdjsn83eaf099c9dd",
        "X-RapidAPI-Host": "cab-booking2.p.rapidapi.com",
      },
      body: JSON.stringify({
        mobileNumber: mob,
      }),
    }
  );

  signInAPI
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      let card = document.getElementById("otpUserSUP");
      card.style.display = "block";
      let signInCard = document.getElementById("signInUserVerify");
      signInCard.style.display = "block";
      let card2 = document.getElementById("signInUser");
      card2.style.display = "none";
      if (data.success) {
        let status = document.getElementById("status");
        let message = document.getElementById("message");
        let otp = document.getElementById("otp");
        status.innerText = data.status;
        message.innerText = data.message;
        otp.innerText = data.otp;
      } else {
        card.innerHTML = `${data.errors} <br>
        <i class="ri-close-circle-fill NextBtn" id="cancleBtn" onclick="cancleOTPuser()"></i>`;
      }
    })
    .catch((err) => {
      alert(err);
    });
}
function cancleS_In() {
  let card = document.getElementById("signInUser");
  card.style.display = "none";
}
function cancleS_In_verify() {
  let signInVerify = document.getElementById("signInUserVerify");
  signInVerify.style.display = "none";
}
function userSignInAPIVerify() {
  let number = document.getElementById("mobNoUserS-In-verify").value;
  let otp = document.getElementById("otpUserS-In-verify").value;
  let signInVerPage = document.getElementById("signInUserVerify");
  signInVerPage.style.display = "none";
  let verifySignIn = fetch(
    "https://cab-booking2.p.rapidapi.com/signup/validateotp",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "76fbc6ae6emsh46851ddef1a7808p1731cdjsn83eaf099c9dd",
        "X-RapidAPI-Host": "cab-booking2.p.rapidapi.com",
      },
      body: JSON.stringify({
        mobileNumber: number,
        otp: otp,
      }),
    }
  );

  verifySignIn
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let card = document.getElementById("verifiedSignUp");
      card.style.display = "block";
      let otpbox = document.getElementById("otpUserSUP");
      otpbox.style.display = "none";
      if (data.success) {
        let message = document.getElementById("messageVer");
        message.innerText = data.message;
        let token = document.getElementById("otpVer");
        token.innerText = data.token;
      } else {
        let message = document.getElementById("verifiedSignUp");
        message.innerHTML = `${data.errors} <br> 
        <i class="ri-close-circle-fill NextBtn" id="cancleBtn" onclick="cancleVerifiedUserPage()"></i>
         `;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function cabAvailable() {
  let start = document.getElementById("from").value;
  let end = document.getElementById("toPlace").value;
  console.log(start);
  console.log(end);

  let availCab = fetch("https://cab-booking2.p.rapidapi.com/cab/booking", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      token: "64fb0157bcbee0826400ad5a",
      "X-RapidAPI-Key": "76fbc6ae6emsh46851ddef1a7808p1731cdjsn83eaf099c9dd",
      "X-RapidAPI-Host": "cab-booking2.p.rapidapi.com",
    },
    body: JSON.stringify({
      startLocation: start,
      endLocation: end,
      startTime: "10:00:00",
      endTime: "18:00:00",
      travellingDistance: 250,
      isPaid: true,
    }),
  });

  availCab
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data.errors);
      let card = document.getElementById("cabAvailInfo");
      card.style.display = "block";
      let cabInfo = document.getElementById("statusCab");
      cabInfo.innerText = data.errors;
      setTimeout(() => {
        let card = document.getElementById("cabAvailInfo");
        card.style.display = "none";
      }, 2500);
    })
    .catch((err) => {
      // console.log(err);
      let cabInfo = document.getElementById("statusCab");
      cabInfo.innerText = err;
    });
}
function cancleInfo() {
  let card = document.getElementById("cabAvailInfo");
  card.style.display = "none";
}
