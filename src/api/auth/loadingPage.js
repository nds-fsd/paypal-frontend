import { useState } from "react";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";

const override = css`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 50%;
   height:auto;
   align-content: center;
   color: teal;
   flex-wrap: nowrap;
   margin-top:250px;
`;

const LoadingPage = () => {

   let [loading, setLoading] = useState(true);
   

   return(

      <div className="sweet-loading">

         <DotLoader loading={loading} css={override} size={350}/>
      </div>
   )

}

export default LoadingPage;