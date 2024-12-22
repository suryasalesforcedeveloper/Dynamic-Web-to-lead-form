function beforesubmit()
{
  let inputdate = document.querySelector(".outputdate");
  let outputdate = document.querySelector(".inputddate");
  console.log("inputdate vale....", inputdate.value);
  console.log("outputdate value....", outputdate.value);

  let formateDate = new Date(inputdate.value).toDateString("en-IN");
  outputdate.value = formateDate;
}
