import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../../assets/css/style.css"

const FooterPagePro = () => {
    return (
        <MDBFooter id="footer" className="font-small pt-0">
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12" className="py-5">
                        <div className="mb-5 flex-center">
                            <a className="li-ic" href="https://www.linkedin.com/in/micah-bigeagle-ba5b3b1ba/" target="_blank">
                                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                                </i>
                            </a>
                            <a className="li-ic" href="https://drive.google.com/file/d/1I4dGZYIQg9vNccVHRFKFM4JP81a8Ctes/view?usp=sharing" target="_blank">
                                <i className="far fa-file fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                            </a>
                            <a className="li-ic" href="https://github.com/Cete4" target="_blank">
                                <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                            </a>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    <div id="footer-text">
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        <p>Micah BigEagle</p>
                    </div>

                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPagePro;