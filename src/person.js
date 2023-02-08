import React, { useState, useEffect , useRef} from "react";
import { Link } from "react-router-dom";
import Pdf from "react-to-pdf";
import { DownloadTableExcel } from "react-export-table-to-excel";
import * as XLSX from 'xlsx';
import FileSaver from "file-saver";

const ref = React.createRef();
const End = () => {
    const tableRef = useRef(null);
const fileType = "xlsx"
    
    
    const [fullname, pickFullname] = useState([]);
    const [user, pickUser] = useState({});

    const getdata = () => {
        fetch("http://localhost:1234/personaldetailes")
            .then(response => response.json())
            .then(serverArray => {
                pickFullname(serverArray);

            });
    };
    const exportToCSV = () => {
        const user1 = XLSX.utils.json_to_sheet(fullname);
                const wb = {Sheets:{user:user1}, SheetNames:[ "user"]};
                const excelBuffer = XLSX.write(wb, {bookType:"xlsx", type:"array"});
                const data = new Blob([excelBuffer], {type:fileType});
                FileSaver.saveAs(data, "myfile"+".xlsx") 
            }
    useEffect(() => {
        getdata();

    }, [1]);

    const show = (id) => {
        const url = `http://localhost:1234/personaldetailes/${id}`;

        fetch(url)
            .then(response => response.json())
            .then(serverArray => {
                console.log(serverArray);
                pickUser(serverArray);
            });
    };

    const Delete = (id) =>{

        const  url =`http://localhost:1234/personaldetailes/${id}`

       var  postdata = {
            headers : {'Content-Type' : 'application/json'},
            method : "DELETE"
         }
       fetch(url,postdata)
       .then(response=>response.json())
       .then(serverArray=>{
        getdata();
        pickUser('')
       
       })


    }

    return (
        <>

       

            <div className="container p-5">
                <div className="row">
                    <div className="col-lg-3 ">
                        <div className="card">
                            <div className=" card-header text-primary  text-center">
                                Available Profiles
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    {
                                        fullname.map((name, id) => {
                                            return (
                                                <li className="list-group-item" key={name.id}>
                                                    <button className="btn me-4 m-2" onClick={() => show(name.id)}>

                                                        <b> <u>{name.fullname}</u></b>
                                                    </button>
                                                    <button className="btn btn-danger  ms-2" onClick={Delete.bind(this,name.id)}>delete</button>
                                                      
                                                </li>
                                            );
                                        })
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 " ref={tableRef}>
                        <div className="card"ref={ref} >
                            <div className="card-header text-center text-primary">Profile Details</div>
                            <div className="card-body text-dark">
                                <div className="row mt-2">
                                    <div className="col-lg-3">
                                        <b>id   : </b>
                                    </div>
                                    <div className="col-lg-2">
                                        <b className="text-danger">{user.id} </b>
                                    </div>

                                    <div className="col-lg-3">
                                        <b>Full Name  : </b>
                                    </div>
                                    <div className="col-lg-3">
                                        <b className="text-danger">{user.fullname} </b>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-lg-3">
                                        <b>Last Name :  </b>
                                    </div>
                                    <div className="col-lg-2">
                                        <b className="text-danger">{user.lastname} </b>
                                    </div>

                                    <div className="col-lg-3">
                                        <b>Email :      </b>
                                    </div>
                                    <div className="col-lg-3">
                                        <b className="text-danger">{user.email} </b>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-lg-3">
                                        <b>Address :  </b>
                                    </div>
                                    <div className="col-lg-2">
                                        <b className="text-danger">{user.address} </b>
                                    </div>

                                    <div className="col-lg-3">
                                        <b>Mobile :        </b>
                                    </div>
                                    <div className="col-lg-3">
                                        <b className="text-danger">{user.mobileno} </b>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-lg-3">
                                        <b>Pincode :</b>
                                    </div>
                                    <div className="col-lg-2">
                                        <b className="text-danger">{user.pincode} </b>
                                    </div>

                                    <div className="col-lg-3">
                                        <b>District :       </b>
                                    </div>
                                    <div className="col-lg-3">
                                        <b className="text-danger"> {user.district} </b>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-lg-3">
                                        <b>State : </b>
                                    </div>
                                    <div className="col-lg-3">
                                        <b className="text-danger">{user.state} </b>
                                    </div>

                                    </div>        
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 m-2">
                    <Link to="/">Back</Link>
                    </div>
                    <div className="col-lg-2 m-2">
                    
                <DownloadTableExcel
                    filename="users table"
                    sheet="users"
                    currentTableRef={tableRef.current} >
                   <button className="btn btn-info"> Export excel </button>
                </DownloadTableExcel>
                <div className="m-2 ">
                <button className="btn btn-secondary" onClick={exportToCSV}>Download File</button>
                </div>
               

                    </div>
                    <div className="col-lg-2 m-2">
                        	
				  
          <div className="text-end mb-2 text-center">
            <Pdf targetRef={ref} filename="userprofile.pdf">
              {({ toPdf }) => (
                <button className="btn btn-info " onClick={toPdf}>
                  Generate Pdf
                </button>
              )}
            </Pdf>
            </div>
           
            
                    </div>
                </div>

                </div>
        </>
    )


}
export default End;




