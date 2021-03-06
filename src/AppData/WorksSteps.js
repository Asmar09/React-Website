import React from "react";

const WorksSteps = () => {
  return (
    <div id="How-It-Works">
      <div className="mpartial_section howitworks">
        <div className="container">
          <div className="title center">
            <div className="row">
              <div className="col">
                <h2 className="section_title_text">How It Works</h2>
              </div>
            </div>
          </div>
          <div className="data_points">
            <div className="row no-gutters">
              <div className="col-md-4 col-sm-12">
                <div className="data_point_item row no-gutters">
                  <div className="data_number data_number_1 col-md-4 col-sm-12">
                    1
                  </div>
                  <div className="data_text  col-md-8 col-sm-12 ">
                    <a href="https://www.getinsights.org/matterport-standards/">
                      Perform pre-mitigation and post-mitigation scans with a
                      Matterport Pro Series camera.
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="data_point_item row no-gutters">
                  <div className="data_number data_number_2 col-md-4 col-sm-12">
                    2
                  </div>
                  <div className="data_text  col-md-8 col-sm-12 ">
                    <span>
                      Submit the Matterport scans via the mpartial portal and
                      then go back to what you do great.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="data_point_item row no-gutters">
                  <div className="data_number data_number_3 col-md-4 col-sm-12">
                    3
                  </div>
                  <div className="data_text  col-md-8 col-sm-12 ">
                    <span>
                      Receive a well-formatted, fully documented Xactimate PDF,
                      ESX &amp; Matterport TruePlan SKX.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="try_now_btn">
            <a href="/">
              <button className="btn">Get Started</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksSteps;
