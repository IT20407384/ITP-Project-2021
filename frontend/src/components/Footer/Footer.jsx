import './Footer.css';

const Footer = props => (
<div>
    <div className="cardss">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="row">
                    <div className="col-md-6">
                        <div className="boxss">
                            <h4>Want to create something together?</h4> <a href="#" className="acs">
                                <p>Get in touch</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="boxss">
                            <p className="mb-0">Moll Helsinki office</p>
                            <h5>Annankatu 12, 2krs.<br/>FIN-00120 Helsinki</h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="boxss">
                            <h4>Help us make cool things!</h4> <a href="#" className="acs">
                                <p>Check our open positions</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 pb-5">
                        <div className="boxss">
                            <p className="mb-0">Cześć! Warsaw office</p>
                            <h5>Plac Bankowy 2<br/>POL-00-095 Warsaw</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div>

                    <h4 className="form-headss">Keep up with news from us</h4>
                    <form onsubmit="event.preventDefault()" className="form-controlss">
                        <div className="form-group">
                            <div className="col-12 get-inputss"> <input id="e-mail" type="text" placeholder="first.last@gmail.com" name="email" className="form-controlss input-boxss rm-border inputss" onfocus="this.placeholder = ''" onblur="this.placeholder = 'first.last@gmail.com'"/> </div>
                        </div><br/>
                        <div className="form-group">
                            <div className="col-12 get-input">
                                <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input inputss"/> <label for="chk1" className="custom-control-label consent">I give my consent that my personal information can be collected and used according to the <a href="#" className="acs"><span>Privacy Policy</span></a></label> </div>
                            </div>
                        </div><br></br>
                        <div className="form-group">
                            <div className="col-md-12 px-4 py-2 get-input pb-5 mb-5"> <button type="submit" className="btn btn-submit rm-border buttonf">YES PLEASE</button> </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-2">
                <div className="row justify-content-center justify-content-md-start"> <img src="https://i.imgur.com/wTcBfAU.png" width="50px" height="50px"/> </div>
            </div>
            <div className="col-md-7 d-flex justify-content-center mb-3">
                <div className="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a href="#" className="acs">About</a> </div>
                <div className="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a href="#" className="acs">Work</a> </div>
                <div className="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a href="#" className="acs">Blog</a> </div>
                <div className="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a href="#" className="acs">Careers</a> </div>
                <div className="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a href="#" className="acs">Contact</a> </div>
            </div>
            <div className="col-md-3 justify-content-center d-flex"> <a href="#" className="acs">
                    <div className="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                        <div className="fa fa-facebook"></div>
                    </div>
                </a> <a href="#" className="acs">
                    <div className="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                        <div className="fa fa-twitter"></div>
                    </div>
                </a> <a href="#" className="acs">
                    <div className="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                        <div className="fa fa-instagram"></div>
                    </div>
                </a> <a href="#" className="acs">
                    <div className="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                        <div className="fa fa-linkedin"></div>
                    </div>
                </a> <a href="#" className="acs">
                    <div className="d-inline-flex px-3 px-md-2 px-lg-3 pt-3">
                        <div className="fa fa-google-plus"></div>
                    </div>
                </a> </div>
        </div>
    </div>
</div>

);

export default Footer;