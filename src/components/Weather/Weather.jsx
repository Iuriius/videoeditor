import { useEffect } from "react";

// Define siClickCount function
const siClickCount = () => {
  // Your siClickCount logic here
  console.log("siClickCount called");
};

export const WeatherWidget = () => {
  useEffect(() => {
    // Load the Sinoptik weather widget script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.charSet = "UTF-8";
    script.src =
      "//sinoptik.ua/informers_js.php?title=4&wind=2&cities=303010783,303001150,303002080,303027480,303010415&lang=ua";
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="SinoptikInformer" style={{ width: "310px" }} className="SinoptikInformer type5c1">
      <div id="SinoptikInformer" style={{ width: "310px" }} className="SinoptikInformer type5c1">
        <div className="siHeader">
          <div className="siLh">
            <div className="siMh">
              <a
                onClick={() => siClickCount()}
                className="siLogo"
                href="https://ua.sinoptik.ua/"
                target="_blank"
                rel="nofollow noreferrer"
                title="Погода"
              >
                {" "}
              </a>
              Погода <span id="siHeader"></span>
            </div>
          </div>
        </div>
        <div className="siBody">
          <a
            onClick={() => siClickCount()}
            href="https://ua.sinoptik.ua/погода-київ"
            title="Погода у Києві"
            target="_blank"
            rel="noreferrer"
          >
            <div className="siCity">
              <div className="siCityName">
                <span>Київ</span>
              </div>
              <div id="siCont0" className="siBodyContent">
                <div className="siLeft">
                  <div className="siTerm"></div>
                  <div className="siT" id="siT0"></div>
                  <div id="weatherIco0"></div>
                </div>
                <div className="siInf">
                  <p>
                    вологість: <span id="vl0"></span>
                  </p>
                  <p>
                    тиск: <span id="dav0"></span>
                  </p>
                  <p>
                    вітер: <span id="wind0"></span>
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            onClick={() => siClickCount()}
            href="https://ua.sinoptik.ua/погода-біла-церква"
            title="Погода у Білій Церкві"
            target="_blank"
            rel="noreferrer"
          >
            <div className="siCity">
              <div className="siCityName">
                <span>Біла Церква</span>
              </div>
              <div id="siCont1" className="siBodyContent">
                <div className="siLeft">
                  <div className="siTerm"></div>
                  <div className="siT" id="siT1"></div>
                  <div id="weatherIco1"></div>
                </div>
                <div className="siInf">
                  <p>
                    вологість: <span id="vl1"></span>
                  </p>
                  <p>
                    тиск: <span id="dav1"></span>
                  </p>
                  <p>
                    вітер: <span id="wind1"></span>
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            onClick={() => siClickCount()}
            href="https://ua.sinoptik.ua/погода-бориспіль"
            title="Погода у Борисполі"
            target="_blank"
            rel="noreferrer"
          >
            <div className="siCity">
              <div className="siCityName">
                <span>Бориспіль</span>
              </div>
              <div id="siCont2" className="siBodyContent">
                <div className="siLeft">
                  <div className="siTerm"></div>
                  <div className="siT" id="siT2"></div>
                  <div id="weatherIco2"></div>
                </div>
                <div className="siInf">
                  <p>
                    вологість: <span id="vl2"></span>
                  </p>
                  <p>
                    тиск: <span id="dav2"></span>
                  </p>
                  <p>
                    вітер: <span id="wind2"></span>
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            onClick={() => siClickCount()}
            href="https://ua.sinoptik.ua/погода-умань"
            title="Погода в Умані"
            target="_blank"
            rel="noreferrer"
          >
            <div className="siCity">
              <div className="siCityName">
                <span>Умань</span>
              </div>
              <div id="siCont3" className="siBodyContent">
                <div className="siLeft">
                  <div className="siTerm"></div>
                  <div className="siT" id="siT3"></div>
                  <div id="weatherIco3"></div>
                </div>
                <div className="siInf">
                  <p>
                    вологість: <span id="vl3"></span>
                  </p>
                  <p>
                    тиск: <span id="dav3"></span>
                  </p>
                  <p>
                    вітер: <span id="wind3"></span>
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a
            onClick={() => siClickCount()}
            href="https://ua.sinoptik.ua/погода-канів"
            title="Погода у Каневі"
            target="_blank"
            rel="noreferrer"
          >
            <div className="siCity">
              <div className="siCityName">
                <span>Канів</span>
              </div>
              <div id="siCont4" className="siBodyContent">
                <div className="siLeft">
                  <div className="siTerm"></div>
                  <div className="siT" id="siT4"></div>
                  <div id="weatherIco4"></div>
                </div>
                <div className="siInf">
                  <p>
                    вологість: <span id="vl4"></span>
                  </p>
                  <p>
                    тиск: <span id="dav4"></span>
                  </p>
                  <p>
                    вітер: <span id="wind4"></span>
                  </p>
                </div>
              </div>
            </div>
          </a>
          <div className="siLinks">
            Погода на 10 днів від{" "}
            <a
              href="https://ua.sinoptik.ua/10-днів"
              title="Погода на 10 днів"
              target="_blank"
              onClick={() => siClickCount()}
              rel="noreferrer"
            >
              {" "}
              sinoptik.ua
            </a>
          </div>
        </div>
        <div className="siFooter">
          <div className="siLf">
            <div className="siMf"></div>
          </div>
        </div>
      </div>
      <script
        type="text/javascript"
        // eslint-disable-next-line react/no-unknown-property
        charSet="UTF-8"
        src="//sinoptik.ua/informers_js.php?title=4&amp;wind=2&amp;cities=303010783,303001150,303002080,303027480,303010415&amp;lang=ua"
      ></script>
    </div>
  );
};
