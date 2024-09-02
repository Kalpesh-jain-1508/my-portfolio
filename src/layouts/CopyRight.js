const CopyRight = () => {
  return (
    <div className="orido_tm_section">
      <div className="orido_tm_copyright">
        <div className="container">
          <div className="copyright_inner">
            <div className="logo">
              <img src="img/logo/kj.png" alt="" />
            </div>
            <div className="copy">
              <p>
                © {" "} {new Date().getFullYear()} All Rights Reserved{" "} by{" "}
                <a href="#">
                  Kalpesh.
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
