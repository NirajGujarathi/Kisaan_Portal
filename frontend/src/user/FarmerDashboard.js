import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
const FarmerDashboard = () => {
    const {
        user: { _id, name, email, location, role}
    } = isAuthenticated();

    const GetInfo= ()=> {

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+location+'&units=metric&cnt=50&appid=44aef6ede898ea08ff2f4d21eea9762c')
    .then(response => response.json())
    .then(data => {
        //Getting the min and max values for each day
        for(var i = 3,j=0; i<43; i+=8,j++){
            // console.log(Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°");
            document.getElementById("day" + (j+1) + "Min").innerHTML = "Min: " + data.list[i].main.temp_min+ "°";
            
        }
    
        for(var i = 3,j=0; i<43; i+=8,j++){
            document.getElementById("day" + (j+1) + "Max").innerHTML = "Max: " + data.list[i].main.temp_max+ "°";
        }
        //------------------------------------------------------------
    
        //Getting Weather Icons
         for(var i = 3,j=0; i<43; i+=8,j++){
            document.getElementById("img" + (j+1)).src = "http://openweathermap.org/img/wn/"+
            data.list[i].weather[0].icon
            +".png";
        }

        for(var i = 0; i<5; i++){
            console.log(weekday[CheckDay(i)]);
            document.getElementById("day"+(i+1)).innerHTML = weekday[CheckDay(i)];
        }
        //------------------------------------------------------------
        // console.log(data)

        // temperature min -max
        // wind speed
        // humidity %
        // weATHER- description
        

    
    
    })
    
    .catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
    }
    //Getting and displaying the text for the upcoming five days of the week
    var d = new Date();
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
    
    //Function to get the correct integer for the index of the days array
    function CheckDay(day){
        // console.log(day + d.getDay());
        if(day + d.getDay() > 6){
            return day + d.getDay() - 7;
        }
        else{
            return day + d.getDay();
        }
    }

    document.addEventListener('readystatechange', event => { 
        // When HTML/DOM elements are ready:
        if (event.target.readyState === "interactive") {   //does same as:  ..addEventListener("DOMContentLoaded"..
        }
    
        // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
        if (event.target.readyState === "complete") {
            GetInfo();
            onloadData();
        }
    });

    const WeatherApi = () =>{
        return (
            
            <div id = "weatherContainer">
                <div className="text-center">
                        <button className="btn btn-danger"  onClick={GetInfo}> Get Weather </button>
            </div>
            <div id="iconsContainer">  
            <div className="row">

                <div className = "col-md-3 icons">
                    <div className="image"><img src="dots.png" className="imgClass" id="img1"/></div>
                    <p className="minValues" id="day1Min">Loading...</p>
                    <p className="maxValues" id="day1Max">Loading...</p>
                    <p className="weather" id="day1"></p>

                </div>
                <div className = "col-md-2 icons">
                    <div className="image"><img src="dots.png" className="imgClass" id="img2"/></div>
                    <p className="minValues" id="day2Min">Loading...</p>
                    <p className="maxValues" id="day2Max">Loading...</p>
                    <p className="weather" id="day2"></p>

                </div>
                <div className = "col-md-2 icons">
                    <div className="image"><img src="dots.png" className="imgClass" id="img3"/></div>
                    <p className="minValues" id="day3Min">Loading...</p>
                    <p className="maxValues" id="day3Max">Loading...</p>
                    <p className="weather" id="day3"></p>

                </div>
                <div className = "col-md-2 icons">
                    <div className="image"><img src="dots.png" className="imgClass" id="img4"/></div>
                    <p className="minValues" id="day4Min">Loading...</p>
                    <p className="maxValues" id="day4Max">Loading...</p>
                    <p className="weather" id="day4"></p>

                </div>
                <div className = "col-md-3 icons">
                    <div className="image"><img src="dots.png" className="imgClass" id="img5"/></div>
                    <p className="minValues" id="day5Min">Loading...</p>
                    <p className="maxValues" id="day5Max">Loading...</p>
                    <p className="weather" id="day5"></p>

                </div>
            </div>  
            </div>
        </div>
        );
    };
    

    const onloadData= () => {
        var url = "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001a91006a69a344a2f5750f6bda75532d8&format=json&offset=0&limit=1000&filters[state]="+location;

        fetch(url)
        .then(response => {
            getData(response.json());
        })
        .catch(err => {
            console.error(err);
        });
    };

    const getData = (result) => {
        //here resolve the data
        Promise.resolve(result).then(value =>{
            //brack the hole function to differnt function
            console.log(value);
            //Descriptio here
            getRecords(value.records);
            getDate(value.updated_date);
		    // getDesc(value.desc);
        })
    };
    
    function getDate(date){
        var update = new Date(date);
        document.getElementById('updatedOn').innerHTML = update.toDateString();
    }

    function getDesc(desc) {
        // console.log(desc);
        document.getElementById('description').innerHTML = desc;
    }


    const getRecords = (record) => {
	if(record.length==0){
            const h = document.getElementById('mandierror');
            h.innerHTML='Sorry! Market is Closed Today';
        }
        for(let i=0;i<record.length;i++) {
            // const sr = i+1;
            // console.log(sr);
            const state = record[i].state;
            // console.log(state);
            const distrcts = record[i].district;
            // console.log(distrcts);
            const market = record[i].market;
            // console.log(market);
            const commodity = record[i].commodity;
            // console.log(commodity);
            const variety = record[i].variety;
            // console.log(variety);
            const min_price= record[i].min_price;
            // console.log(min_price);
            if(isNaN((min_price/100))){
                continue;
            }
            const max_price = record[i].max_price;
            // console.log(max_price);
            // const modal_price = record[i].modal_price;
            // // console.log(modal_price);
            const tTr = document.createElement('tr');
            
            tTr.innerHTML ='<td scope="row">'+state+'</td>'+'\n'+
                '<td>'+distrcts+'</td>'+'\n'+
                '<td>'+market+'</td>'+'\n'+
                '<td>'+commodity+'</td>'+'\n'+
                '<td>'+min_price / 100 +' - '+max_price / 100 +'</td>'+'\n'+
                '<td>'+variety+'</td>'+'\n';
            document.getElementById('market_price_body').appendChild(tTr);
        }
    };
	const FarmerLinks = () => {
        return (
            <div className="card ml-5">
                <h4 className="card-header">Actions</h4>
                <ul className="list-group">
                <li className="list-group-item">
                        <Link className="nav-link" to="/view">
                            View Vegetables
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/add/vegetables">
                            Add Vegetables
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/remove">
                            Remove Vegetables
                        </Link>
                    </li>
					<li className="list-group-item">
                        <Link className="nav-link" to={`/profile/${_id}`} >
                            Update Profile
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };
    const searchDistrict =() =>{
        const fillter = document.getElementById('search_input_dist').value.toUpperCase();
        const table = document.getElementById('market_price_body');
        const tr = table.getElementsByTagName('tr');
        for(let i=0; i<tr.length; i++){
            const td= tr[i].getElementsByTagName('td')[1];
            if(td){
                const textvale = td.textContent || td.innerHTML;
                if(textvale.toUpperCase().indexOf(fillter)>-1){
                    tr[i].style.display="";
                }else{
                    tr[i].style.display ="none";
                }
            }
        }
    }
    const searchCommodity =() =>{
        const fillter = document.getElementById('search_input_comm').value.toUpperCase();
        const table = document.getElementById('market_price_body');
        const tr = table.getElementsByTagName('tr');
        for(let i=0; i<tr.length; i++){
            const td_commodity= tr[i].getElementsByTagName('td')[3];
            if(td_commodity){
                const textvale_commodity = td_commodity.textContent || td_commodity.innerHTML;
                if(textvale_commodity.toUpperCase().indexOf(fillter)>-1){
                    tr[i].style.display="";
                }else{
                    tr[i].style.display ="none";
                }
            }
        }
    }
	const farmerInfo = () => {
        return (
            <div className="card mb-5">
				<h3 className="card-header">Personal Details</h3>
				<ul className="list-group">
					<li className="list-group-item"> {name} </li>
					<li className="list-group-item"> {email} </li>
					<li className="list-group-item"> {location} </li>
					<li className="list-group-item"> {role === 1 ? "Farmer" : "Customer"} </li>
				</ul>
			</div>
        );
    };
    
    const GovApi= () => {
        return (
        <div id="govapi" >
        
        
        <div className="container-fluid p-3 fetch_data">
            <div className="row" >
                <div className="col-xl-12">
                    <h6 className="text-center mt-3">Price in Rupees per Kilogram </h6>
                    <h6 className="text-center mt-3">Updated On : <span id="updatedOn"></span></h6>
                    <div className="text-center">
                        <button className="btn btn-danger"  onClick={onloadData}> Fetch Data </button>
                    </div>
                </div>
            </div>
        </div>
        <br></br>
        <div className="row">
            <div className="col-xl-6 search_box text-white">
                <input className="form-control" id="search_input_dist" type="text" placeholder="Search district mandi from your state" onKeyUp={searchDistrict}/>
            </div>
            <div className="col-xl-6 search_box text-white">
                <input className="form-control" id="search_input_comm" type="text" placeholder="Search specific vegetable or fruit ( commodity )" onKeyUp={searchCommodity}/>
            </div>
        </div>
        <br></br>
        <div>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="bg-info text-white">
                        <tr>
                            <th scope="col">State</th>
                            <th scope="col">District</th>
                            <th scope="col">Market</th>
                            <th scope="col">Commodity</th>
                            <th scope="col">Price Range</th>
                            <th scope="col">Variety</th>                            
                        </tr>
                    </thead>
                    <tbody id="market_price_body">
                        <tr id="msg">
                            
                        </tr>
                    </tbody>
                </table>
		<div>
                    <h3 id="mandierror">
                         </h3>
                </div>
            </div>
        
        </div>
            
        </div>
        );
    };
    

	return (
        <Layout
            title={`Welcome to Kisaan Portal ${name} !`} 
			className="container-fluid text-center"
        >
			
			<div className="row">
                <div className="col-md-12 offset-md-0">{WeatherApi()} </div> 
                <div className="col-md-2 offset-md-0">{FarmerLinks()}</div>
                <div className="col-md-8 offset-md-0">{GovApi()} </div>
                <div className="col-md-2 offset-md-0">{farmerInfo()}</div>
                
            </div>
           

        </Layout>
	)
};


export default FarmerDashboard;
