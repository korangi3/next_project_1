import styles from './service.module.css';

function Service() {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.citizenContainer}>
                <h2>Citizen Zone</h2><br />
                <div className={styles.citizenChild}>
                    <a href=''>
                        <div style={{ backgroundColor: "#0c4be3" }} className={styles.iconBox}>
                            <div className={styles.sIconBox}>
                                <img src="https://kathmandu.gov.np/wp-content/uploads/2021/02/delivery-box-1.png" />
                                <h5>Services</h5>
                            </div>
                        </div>
                    </a>
                    <a href=''>
                        <div style={{ backgroundColor: "#5b912a" }} className={styles.iconBox}>
                            <div className={styles.sIconBox}>
                                <img src='https://kathmandu.gov.np/wp-content/uploads/2021/02/portal-1.png' />
                                <h5>E-Gov Services</h5>
                            </div>
                        </div>
                    </a>
                    <a href=''>
                        <div style={{ backgroundColor: "#912a2a" }} className={styles.iconBox}>
                            <div className={styles.sIconBox}>
                                <img src='https://kathmandu.gov.np/wp-content/uploads/2021/02/people-1.png' />
                                <h5>Secretariat/ Department</h5>
                            </div>
                        </div>
                    </a>
                    <a href=''>
                        <div style={{ backgroundColor: "#aa2ac1" }} className={styles.iconBox}>
                            <div className={styles.sIconBox}>
                                <img src='https://kathmandu.gov.np/wp-content/uploads/2021/02/conference-1.png' />
                                <h5>Ward</h5>
                            </div>
                        </div>
                    </a>
                    <a href=''>
                        <div style={{ backgroundColor: "#bd7b0e" }} className={styles.iconBox}>
                            <div className={styles.sIconBox}>
                                <img src='https://kathmandu.gov.np/wp-content/uploads/2021/02/protect-1.png' />
                                <h5>Heritage</h5>
                            </div>
                        </div>
                    </a>
                    <a href=''>
                        <div style={{ backgroundColor: "#2eb7a5" }} className={styles.iconBox}>
                            <div className={styles.sIconBox}>
                                <img src='https://kathmandu.gov.np/wp-content/uploads/2021/02/crm-1.png' />
                                <h5>National/ International Relations</h5>
                            </div>
                        </div>
                    </a>
                    <a href=''>
                        <div style={{ backgroundColor: "#2e0b30" }} className={styles.iconBox}>
                            <div className={styles.sIconBox}>
                                <img src='https://kathmandu.gov.np/wp-content/uploads/2021/02/coronavirus-1.png' />
                                <h5>Covid-19</h5>
                            </div>
                        </div>
                    </a>
                    <a href=''>
                        <div style={{ backgroundColor: "#ba2020" }} className={styles.iconBox}>
                            <div className={styles.sIconBox}>
                                <img src='https://kathmandu.gov.np/wp-content/uploads/2021/02/output-onlinepngtools-1-1.png' />
                                <h5>Procurement</h5>
                            </div>
                        </div>
                    </a>
                    <a href=''>
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
                            <a class="nav-link" href="#">Main</a>
                            <a class="nav-link" href="#">Ward</a>
                            <a class="nav-link" href="#">Department</a>
                            <a class="nav-link" href="#">Covid-19</a>
                            <a class="nav-link" href="#">Employee</a>
                        </nav>
                        <div className={styles.noticeContent}>

                        </div>
                    </div>
                    <button type="button" class="btn btn-warning">View More</button>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default Service;
