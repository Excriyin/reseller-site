import { useState } from "react";
export default function Modal(item, domain) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
          <button 
 className="flex justify-center items-center p-3 w-full text-base font-semibold text-white bg-gradient-to-r rounded-md rounded-xl transition duration-300 ease-in-out from-secondary to bg-third hover:bg-opacity-80 hover:shadow-signUp"
 onClick={() => setShowModal(true)}

 >
            Start Free Trial
          </button>
      {showModal ? (
        <>
        <div className="sellpass-modal"  onClick={() => console.log('sdfsd')}
>
            <div className="sellpass-iframe-backdrop">

            </div>
            <div className="sellpass-iframe-wrapper show">
                <iframe className="sellpass-iframe" src="https://hayaimethods.sellpass.io//embed/products/Spotify%20Personal%20PlanxdZ3kaom"></iframe>
            </div>
        </div>

        </>
      ) : null}
    </>
  );
}