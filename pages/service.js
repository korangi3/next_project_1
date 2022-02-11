import styles from './service.module.css';
import Main from './main.json';
import Ward from './ward.json';
import Department from './department.json';
import Covid from './covid.json';
import Employee from './employee.json';
import Head from "next/head";

function Service() {
    //getting data from api maybe PEMBAAAAAA;
    /* fetch().then(response => {
        return response.json();
    }).then(data => {

    }); 
    */

    return (<>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className={styles.mainContainer}><br />
            <div className={styles.citizenContainer}>
                <h2>Citizen Zone</h2><br />
                <div className={styles.citizenChild}>
                    <a href='http://kathmandu.gov.np/kmc-service/?lang=en' target="_blank">
                        <div style={{ backgroundColor: "#0c4be3" }} className={styles.iconBox}>
                            <div className={styles.sIconBox}>
                                <img src="https://kathmandu.gov.np/wp-content/uploads/2021/02/delivery-box-1.png" />
                                <h5>Services</h5>
                            </div>
                        </div>
                    </a>
                    <a href='http://kathmandu.gov.np/service-type/citizen/?lang=en' target="_blank">
                        <div style={{ backgroundColor: "#5b912a" }} className={styles.iconBox}>
                            <div className={styles.sIconBox}>
                                <img src='https://kathmandu.gov.np/wp-content/uploads/2021/02/portal-1.png' />
                                <h5>E-Gov Services</h5>
                            </div>
                        </div>
                    </a>
                    <a href='http://kathmandu.gov.np/department/?lang=en' target="_blank">
                        <div style={{ backgroundColor: "#912a2a" }} className={styles.iconBox}>
                            <div className={styles.sIconBox}>
                                <img src='https://kathmandu.gov.np/wp-content/uploads/2021/02/people-1.png' />
                                <h5>Secretariat/ Department</h5>
                            </div>
                        </div>
                    </a>
                    <a href='http://kathmandu.gov.np/ward/' target="_blank">
                        <div style={{ backgroundColor: "#aa2ac1" }} className={styles.iconBox}>
                            <div className={styles.sIconBox}>
                                <img src='https://kathmandu.gov.np/wp-content/uploads/2021/02/conference-1.png' />
                                <h5>Ward</h5>
                            </div>
                        </div>
                    </a>
                    <a href='http://kathmandu.gov.np/heritage/?lang=en' target="_blank">
                        <div style={{ backgroundColor: "#bd7b0e" }} className={styles.iconBox}>
                            <div className={styles.sIconBox}>
                                <img src='https://kathmandu.gov.np/wp-content/uploads/2021/02/protect-1.png' />
                                <h5>Heritage</h5>
                            </div>
                        </div>
                    </a>
                    <a href='http://kathmandu.gov.np/kmc-relation/?lang=en' target="_blank">
                        <div style={{ backgroundColor: "#2eb7a5" }} className={styles.iconBox}>
                            <div className={styles.sIconBox}>
                                <img src='https://kathmandu.gov.np/wp-content/uploads/2021/02/crm-1.png' />
                                <h5>National/ International Relations</h5>
                            </div>
                        </div>
                    </a>
                    <a href='http://kathmandu.gov.np/covid-19/?lang=en' target="_blank">
                        <div style={{ backgroundColor: "#2e0b30" }} className={styles.iconBox}>
                            <div className={styles.sIconBox}>
                                <img src='https://kathmandu.gov.np/wp-content/uploads/2021/02/coronavirus-1.png' />
                                <h5>Covid-19</h5>
                            </div>
                        </div>
                    </a>
                    <a href='http://kathmandu.gov.np/report-type/procurement/' target="_blank">
                        <div style={{ backgroundColor: "#ba2020" }} className={styles.iconBox}>
                            <div className={styles.sIconBox}>
                                <img src='https://kathmandu.gov.np/wp-content/uploads/2021/02/output-onlinepngtools-1-1.png' />
                                <h5>Procurement</h5>
                            </div>
                        </div>
                    </a>
                    <a href='http://kathmandu.gov.np/kmc-contact/?lang=en' target="_blank">
                        <div style={{ backgroundColor: "#6b70d7" }} className={styles.iconBox}>
                            <div className={styles.sIconBox}>
                                <img src='https://kathmandu.gov.np/wp-content/uploads/2021/03/complaints.png' />
                                <h5>Grievance</h5>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={styles.prabaktaContainer}>
                    <div className={styles.prabakta}>
                        <img src='https://kathmandu.gov.np/wp-content/uploads/2021/02/Untitled-design.png' />
                        <div>
                            <h2>Ishwor Man Dangol</h2>
                            <p>Spokesman</p>
                            <span></span>
                            <span>9898989898</span>
                        </div>
                    </div>
                    <div className={styles.prabakta}>
                        <img src='https://kathmandu.gov.np/wp-content/uploads/2021/02/Untitled-design-1.png' />
                        <div>
                            <h2>Man Dangol</h2>
                            <p>random</p>
                            <span></span>
                            <span>9898989898</span>
                        </div>
                    </div>
                    <div className={styles.prabakta}>
                        <img src='https://kathmandu.gov.np/wp-content/uploads/2021/12/Screen-Shot-2021-12-23-at-12.45.06-removebg-preview.png' />
                        <div>
                            <h2>Man Dangol</h2>
                            <p>asdf</p>
                            <span></span>
                            <span>9898989898</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.noticeContainer}>
                <h2>Notices & Circulars</h2><br />
                <div className={styles.noticeBox}>
                    <div className={styles.noticeNav}>
                        <nav className={styles.noticeBar}>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-main-tab" data-bs-toggle="tab" data-bs-target="#nav-main" type="button" role="tab" aria-controls="nav-main" aria-selected="true">Main</button>
                                <button className="nav-link" id="nav-ward-tab" data-bs-toggle="tab" data-bs-target="#nav-ward" type="button" role="tab" aria-controls="nav-ward" aria-selected="false">Ward</button>
                                <button className="nav-link" id="nav-department-tab" data-bs-toggle="tab" data-bs-target="#nav-department" type="button" role="tab" aria-controls="nav-department" aria-selected="false">Department</button>
                                <button className="nav-link" id="nav-covid-tab" data-bs-toggle="tab" data-bs-target="#nav-covid" type="button" role="tab" aria-controls="nav-covid" aria-selected="false">Covid</button>
                                <button className="nav-link" id="nav-employee-tab" data-bs-toggle="tab" data-bs-target="#nav-employee" type="button" role="tab" aria-controls="nav-employee" aria-selected="false">Employee</button>
                            </div>
                        </nav>
                        
                        <div className={styles.noticeContent}>
                            <br />
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-main" role="tabpanel" aria-labelledby="nav-main-tab">
                                    {Main.map(post => {
                                        return (
                                            <>
                                                <h5><a>{post.heading}</a></h5>
                                                <p>Posted Date : {post.date}</p>
                                                <p>__________________________________________________________________</p>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className="tab-pane fade" id="nav-ward" role="tabpanel" aria-labelledby="nav-ward-tab">
                                    {Ward.map(post => {
                                        return (
                                            <>
                                                <h5><a>{post.heading}</a></h5>
                                                <p>Posted Date : {post.date}</p>
                                                <p>__________________________________________________________________</p>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className="tab-pane fade" id="nav-department" role="tabpanel" aria-labelledby="nav-department-tab">
                                    {Department.map(post => {
                                        return (
                                            <>
                                                <h5><a>{post.heading}</a></h5>
                                                <p>Posted Date : {post.date}</p>
                                                <p>__________________________________________________________________</p>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className="tab-pane fade" id="nav-covid" role="tabpanel" aria-labelledby="nav-covid-tab">
                                    {Covid.map(post => {
                                        return (
                                            <>
                                                <h5><a>{post.heading}</a></h5>
                                                <p>Posted Date : {post.date}</p>
                                                <p>__________________________________________________________________</p>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className="tab-pane fade" id="nav-employee" role="tabpanel" aria-labelledby="nav-employee-tab">
                                    {Employee.map(post => {
                                        return (
                                            <>
                                                <h5><a>{post.heading}</a></h5>
                                                <p>Posted Date : {post.date}</p>
                                                <p>__________________________________________________________________</p>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <button className={styles.noticeButton}><a href='https://kathmandu.gov.np/notice-type/main-en/?lang=en'>View More</a></button>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Service;
