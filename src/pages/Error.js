import React from 'react'
import {Link} from 'react-router-dom'

function Error() {
    return (
      <>
        <section className="page_404">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 ">
                <div className="col-sm-10 col-sm-offset-1  text-center">
                  <div className="error-bg">
                    <h1 className="text-center ">404</h1>
                  </div>
                  <div className="contant_box_404">
                    <h3 className="h2">Whoops! Tough luck</h3>
                    <p>
                      Refresh the page. If it doesn't work type
                      *http://localhost:3000/page* into the address bar
                    </p>
                        <p>OR</p>
                    <Link to="/" className="link_404">
                      Home Maybe
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Error
