import React, {BrowserRouter, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';



ReactDOM.render(  
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<App />} >
          <Route path="financial" element={<Form />} />
          <Route path="investments" element={<Investments />} />
          <Route path="about" element={<About />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
          }/>
        </Route>  
      </Routes>   */}
      <App/>
    </BrowserRouter>,
    
  document.getElementById('root')
);


