import { useEffect } from "react";
import Script from "next/script";

const MarketoForm = () => {
  const formId = 1001; // Replace with your Marketo form ID
  const munchkinId = "307-PGA-529"; // Replace with your Marketo Munchkin ID
  const email = "test@example.com"; // Replace with the email address you want to submit

  useEffect(() => {
    if (window.MktoForms2) {
      window.MktoForms2.loadForm("//app-sn04.marketo.com", munchkinId, formId);
    }
  }, [formId, munchkinId]);

  useEffect(() => {
    const myForm = window.MktoForms2.allForms()[0];
    console.log(myForm);
    if (myForm) {
      myForm.addHiddenFields({
        Email: email,
      });
      myForm.submit();
    }
  }, [email]);

  return (
    <>
      <Script src="//app-sn04.marketo.com/js/forms2/js/forms2.min.js" />
      <form id={`mktoForm_${formId}`} style={{ display: "none" }}></form>
    </>
  );
};

export default MarketoForm;
