var mysql=require("mysql");
var express=require("express");
var cors=require("cors");
var app=express();
const multer = require('multer');
var bodyParser=require("body-parser");
const path=require("path");
const nodemailer = require("nodemailer");




app.use(express.json());
app.use(cors());

app.use("/public", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));




var con = mysql.createConnection({
    host:"localhost" ,
    user:"root" ,
    password:"",
    database :"lavishly_leathers",
    }
);

con.connect(
    function(err){
        if(err) throw err;
        console.log("connected");
    }
);


/*---------------------------------------------------------------*/

app.post("/api/insert",(req,resp)=>{
    
    var uname = req.body.name;
    var uaddress = req.body.address;
    var uemail = req.body.email;
    var umobileno = req.body.mobileno;
    var upass = req.body.pass;
    //var uconfirmpass = req.body.confirmpass;

    const query="Insert into user_registration (User_fullname,User_address,User_email,User_mobileno,User_password) values(?,?,?,?,?)";
    con.query(query,[uname,uaddress,uemail,umobileno,upass]);
    resp.send({message:"Details are added "});
});



/*---------------------------------------------------------------*/

app.post("/api/login",(req,resp)=>{
    
    var useremail = req.body.email;
    var userpassword = req.body.pass;
    
   // console.log(useremail);
    const query="Select * from user_registration where User_email=? and User_password=? ";
    con.query(query,[useremail,userpassword],(err,result)=>{
        if(result.length > 0)
        {
            //console.log("dhsfjhfhjs");
           resp.send(result);
        }
        else
        {
           // console.log("useremail");
        resp.send({message:"Please enter valid details !!"});
        }
     }
     );
    }
  
    );



/*---------------------------------------------------------------*/

app.post("/api/admin",(req,resp)=>{
    
    var Admemail = req.body.email;
    var Admpassword = req.body.pass;
    
    const query="Select * from admin_login where AL_email=? and AL_password=? ";
    con.query(query,[Admemail,Admpassword],(err,result)=>{
        if(result.length > 0)
        {
           resp.send(result);
        }
        else
        {
        resp.send({message:"Please enter valid details !!"});
        }
     }
     );
    }
  
    );



/*-------------------------------Create Product--------------------------------*/


    const storage=multer.diskStorage({
        destination:path.join(__dirname,'./public/'),
        filename: function(req, file, callback) {
            callback(null, Date.now() + '-' + path.extname(file.originalname))
    }
    }
    
    )
    

    var upload1=multer({storage:storage});
    var multi=upload1.fields([{name:'rpimage'}]);
   
    app.post("/api/createpro",multi,(req,resp)=>{
        if(req.files){
   // ,(req,resp)=>{
    
   const a=req.files.rpimage[0];
   
   var b=a.filename;
  // console.log(a.upload);
   console.log(b);
  // var gender=req.body.gender;
  // console.log(gender);
   
     
        var pname = req.body.name;
        var pprice = req.body.price;
        var pdescription = req.body.description;
        var pcategory = req.body.category;
        var psubcategory = req.body.subcategory;
        var pstock = req.body.stock;
        var pimages = b;
    
        const query="Insert into create_product(P_name,P_price,P_description,P_category,P_sub_category,P_stock,P_images) values(?,?,?,?,?,?,?)";
        con.query(query,[pname,pprice,pdescription,pcategory,psubcategory,pstock,pimages]);
        resp.send({message:"Details are added "});
   
        }
        else
        {

            console.log("Not found");
        }
    });




/*---------------------------------------------------------------*/


    app.get('/api/addproduct',(req,resp)=>{
     
        const ins = "select * from create_product";
        con.query(ins,(err,result)=>{
            console.log(result);
            resp.send(result);
        });
    });


/*---------------------------- women Products -----------------------------------*/


    app.get('/api/viewproduct',(req,resp)=>{
        var procat=req.query.name;
        
        console.log(procat);
        if(procat=="All")
        { 
            const ins = "select * from create_product where P_sub_category='Women' ";
        con.query(ins,(err,result)=>{
            console.log(result);
            resp.send(result);
        });}

        else
        {
        const ins = "select * from create_product where  P_sub_category='Women' and P_category=? ";
        con.query(ins,[procat],(err,result)=>{
            console.log(result);
            resp.send(result);
        });
    }
    });




/*---------------------------- men Products -----------------------------------*/


app.get('/api/viewproduct1',(req,resp)=>{
    var procat1=req.query.name;
    console.log(procat1);
    if(procat1=="All")
    { 
        const ins = "select * from create_product where P_sub_category='Men' ";
    con.query(ins,(err,result)=>{
        console.log(result);
        resp.send(result);
    });}

    else
    {
    const ins = "select * from create_product where  P_sub_category='Men' and P_category=? ";
    con.query(ins,[procat1],(err,result)=>{
        console.log(result);
        resp.send(result);
    });
}
});




/*---------------------------- luggage Products -----------------------------------*/


app.get('/api/viewproduct2',(req,resp)=>{
    var procat2=req.query.name;
    console.log(procat2);
   
        const ins = "select * from create_product where P_sub_category='Luggage Bags' ";
    con.query(ins,(err,result)=>{
        console.log(result);
        resp.send(result);
    });



});



/*---------------------------- giftcombos Products -----------------------------------*/


app.get('/api/viewproduct3',(req,resp)=>{
    var procat3=req.query.name;
    console.log(procat3);
    if(procat3=="All")
    { 
        const ins = "select * from create_product where P_sub_category='Gift Combos' ";
    con.query(ins,(err,result)=>{
        console.log(result);
        resp.send(result);
    });}

    else
    {
    const ins = "select * from create_product where  P_sub_category='Gift Combos' and P_category=? ";
    con.query(ins,[procat3],(err,result)=>{
        console.log(result);
        resp.send(result);
    });
}
});

 /*---------------------------------------------------------------*/


 app.post("/api/cartItems",(req,resp)=>{
    
    var proid = req.body.id;
    var proemail = req.body.uemail;
   console.log(proid );
   console.log(proemail);

    const query="Select * from add_to_cart where Pr_id=? and user_id=? ";
    con.query(query,[proid,proemail],(err,result)=>{
        if(result.length > 0)
        {
           
            resp.send({message:" Product is already in the cart !! "});
       
           
        }
        else
        {
            const query="Insert into add_to_cart(Pr_id,user_id) values(?,?)";
            con.query(query,[proid,proemail]);
            resp.send({message:" Product is added to the cart !! "});
          resp.send
             }
     } );

});

/*---------------------------------------------------------------*/


app.get('/api/addproducttocart',(req,resp)=>{
     
    var uemail=req.query.uemail;
   console.log(uemail);
    const ins = "select a.*,b.* from create_product as a ,add_to_cart as b where a.Pr_id=b.Pr_id and b.user_id=?";
    
    con.query(ins,[uemail],(err,result)=>{
        console.log(result);
        resp.send(result);
    });
});


/*---------------------------------------------------------------*/


app.post("/api/wishlistItems",(req,resp)=>{
    
    var proid = req.body.id;
    var proemail = req.body.uemail;
   console.log(proid );
   console.log(proemail);

    const query="Select * from wishlist where Pr_id=? and user_id=? ";
    con.query(query,[proid,proemail],(err,result)=>{
        if(result.length > 0)
        {
           
            resp.send({message:" Product is already in the Wishlist !! "});
       
           
        }
        else
        {
            const query="Insert into wishlist(Pr_id,user_id) values(?,?)";
            con.query(query,[proid,proemail]);
            resp.send({message:" Product is added to the Wishlist !! "});
          resp.send
             }
     } );

});


/*---------------------------------------------------------------*/

app.get('/api/addproducttowishlist',(req,resp)=>{
     
    var uemail=req.query.uemail;
   console.log(uemail);
    const ins = "select a.*,b.* from create_product as a , wishlist as b where a.Pr_id=b.Pr_id and b.user_id=?";
    
    con.query(ins,[uemail],(err,result)=>{
        console.log(result);
        resp.send(result);
    });
});

/*---------------------------------------------------------------*/

app.post("/api/cartquantity",(req,resp)=>{
    
    var cartcartid = req.body.cartid;
    var cartprodqty = req.body.prodqty;
   console.log(cartcartid);
   console.log(cartprodqty);

            const query=" UPDATE add_to_cart  SET  Cart_quantity = ? WHERE Cart_id= ? ";
            con.query(query,[cartprodqty,cartcartid]);
            resp.send({message:" Quantity Updated !! "});
          resp.send
       
           
         });


/*----------------------------------remove product from add to cart ---------------------------------------------*/

app.post("/api/removepro",(req,resp) =>{

    var removecartid = req.body.cartid;

    console.log(removecartid);

            const query=" DELETE FROM add_to_cart WHERE Cart_id= ?  ";
            con.query(query,[removecartid]);
            resp.send({message:" Product is Removed !! "});
             resp.send
                

});


/*-----------------------------remove product from admin products ----------------------------------------------------*/


app.post("/api/removeproduct",(req,resp) =>{

    var removeproid= req.body.proid;

    console.log(removeproid);

            const query=" DELETE FROM create_product WHERE Pr_id= ?  ";
            con.query(query,[removeproid]);
            resp.send({message:" Product is Removed !! "});
             resp.send
                

});



/*----------------------------------remove product from wishlist ---------------------------------------------*/

app.post("/api/remove",(req,resp) =>{

    var removewishlistid = req.body.wishlistid;

    console.log(removewishlistid);

            const query=" DELETE FROM wishlist WHERE wishlist_id= ?  ";
            con.query(query,[removewishlistid]);
            resp.send({message:" Product is Removed !! "});
             resp.send
                

});

/*----------------------------------delete  order---------------------------------------------*/

app.post("/api/deleteorder",(req,resp) =>{

    var deleteorderid = req.body.orderid;

    console.log(deleteorderid);

            const query=" DELETE FROM product_orders  WHERE order_id= ?  ";
            con.query(query,[deleteorderid]);
            resp.send({message:" Order is successfully Deleted !!"});
             resp.send
                

});

/*----------------------------------save product for later ---------------------------------------------*/


app.post("/api/savelater",(req,resp)=>{
    
    var saveid = req.body.id;
    var saveemail = req.body.uemail;
   console.log(saveid );
   console.log(saveemail);

            const query1=" DELETE FROM add_to_cart WHERE Pr_id= ?";
            con.query(query1,[saveid,saveemail]);


            const query="Insert into save_for_later(Pr_id,user_id) values(?,?)";
            con.query(query,[saveid,saveemail]);
            resp.send({message:" Product is saved for later !! "});
            resp.send
            
     } );



/*----------------------------------display product in save for later ---------------------------------------------*/

app.get('/api/saveproduct',(req,resp)=>{
     
    var uemail=req.query.uemail;
   console.log(uemail);
    const ins = "select a.*,b.*  from create_product as a  ,save_for_later as b where a.Pr_id=b.Pr_id and b.user_id=?";
    
    con.query(ins,[uemail],(err,result)=>{
        console.log(result);
        resp.send(result);
    });
});

/*------------------------------ add product from save for later to cart -------------------------------------------------*/

app.post("/api/addbacktocart",(req,resp)=>{
    
    var proid = req.body.id;
    var proemail = req.body.uemail;
   console.log(proid );
   console.log(proemail);

            const query1=" DELETE FROM save_for_later WHERE Pr_id= ?";
            con.query(query1,[proid,proemail]);

            const query="Insert into add_to_cart(Pr_id,user_id) values(?,?)";
            con.query(query,[proid,proemail]);
            resp.send({message:" Product is added to the cart !! "});
          resp.send
             
     } );


/*----------------------------------remove product from save from later ---------------------------------------------*/


     app.post("/api/savelaterremove",(req,resp) =>{

        var removesaveid = req.body.saveid;
    
        console.log(removesaveid);
    
                const query=" DELETE FROM save_for_later WHERE save_id= ?  ";
                con.query(query,[removesaveid]);
                resp.send({message:" Product is Removed !! "});
                 resp.send
                    
    
    });




/*----------------------------------Payment of order  ---------------------------------------------*/


app.post("/api/productorder", (req, resp) => {

    var orderemail = req.body.uemail;
    const characters = '0123456789abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 6; i > 0; i--) {
      result += characters[Math.floor(Math.random() * characters.length)];
    }
    var fid = result;
    const query = "SELECT * FROM add_to_cart WHERE user_id = ?";
    con.query(query, [orderemail], (err, result) => {
      if (err) {
        console.error(err);
   
      }
      if (result.length > 0) {
        const a = result.length;
        console.log("The length is " + a);
        for (i = 0; i < a; i++) {
          var qty = result[i].Cart_quantity;
          var prid = result[i].Pr_id;
          console.log("The qty is " + qty);
          console.log("The prid is " + prid);
          const  insertQuery = "INSERT INTO product_orders(finaloid, user_id, Pr_id, order_quantity) VALUES (?, ?, ?, ?)";
          con.query(insertQuery, [fid, orderemail, prid, qty], (err, result) => {
            if (err) {
              console.error(err);
              return resp.status(500).send({ message: "Error placing order" });
            }
          });
        }
        //resp.send({ message: "Order placed successfully!" });
      } else {
        console.log("No cart items found");
            }
    });

    const query1=" DELETE FROM add_to_cart WHERE user_id= ?";
     con.query(query1,[orderemail]);


     const query2="Select * from user_registration where user_email=?  ";
     con.query(query2,[orderemail],(err,result)=>{
         if(result.length > 0)
         {
            resp.send(result);
          // var forgetpass=result[0].user_password;
           var forgetname=result[0].user_fullname;
           var orderid=result[0].finaloid;
 
            const smtpTransport = nodemailer.createTransport({
             host: "smtp.gmail.com",
             port: 587,
             secure: false,
             auth: {
               user: "astha.d.2501@gmail.com",
               pass: "fehhmqyvrvqsdqxs",
             },
           });
           const message = {
             from: "astha.d.2501@gmail.com",
             to: orderemail,
           
             subject: "Lavishly Leathers Security",
             text: "Dear, " + forgetname + "\n"+ "\n" +"We've successfully placed your order !!",
           };
          smtpTransport.sendMail(message, (error, info) => {
             if (error) {
               console.error(error);
             } else {
               //console.log("Email sent:", info.response);
               resp.send({ message: "Email Sent !" });

             }
           });
 
         }
        
        
      });


  });
  

/*---------------------------------------display default values in edit profile page -------------------------------------------*/



app.get('/api/edit_details',(req,resp)=>{
     
    var uemail=req.query.uemail;
   console.log(uemail);

    const ins = "select * from User_registration  where user_email=?";
    
    con.query(ins,[uemail],(err,result)=>{
        console.log(result);
        resp.send(result);
    });
});



/*---------------------------------------edit personal details-------------------------------------------*/

app.post("/api/newprofile",(req,resp)=>{

    
    var orderemail = req.body.uemail;
   
    var editname = req.body.name;
    var editemail = req.body.email;
    var editaddress = req.body.address;
    var editmobileno = req.body.mobileno;
  // console.log(editname);
  // console.log(editemail);
  // console.log(editaddress);
  // console.log(editmobileno);
  // console.log(orderemail);
        const query=" UPDATE user_registration  SET  user_fullname = ? , user_email = ? ,user_address = ? ,user_mobileno = ?  WHERE  user_email=?";
        con.query(query,[editname,editemail,editaddress,editmobileno,orderemail]);
        resp.send({message:" Details Updated !! "});
      resp.send
      
          
       
  });



/*---------------------------------------update password------------------------------------------*/


app.post("/api/updatepassword",(req,resp)=>{

    
    var orderemail = req.body.uemail;
    
    var editoldpass = req.body.oldpass;
    var editnewpass = req.body.newpass;
 

const query="Select * from user_registration  where user_email=? and user_password=?  ";
con.query(query,[orderemail,editoldpass],(err,result)=>{
    if(result.length > 0)
    {
        console.log(editoldpass);
        const query1=" UPDATE user_registration  SET  user_password=?  WHERE  user_email=? ";
        con.query(query1,[editnewpass,orderemail]);
        resp.send({message:" Details Updated !! "});
      resp.send
       
    }
    else
    {
        resp.send({message:"incorrect password !! "});
    }
 } );

});


/*---------------------------------------display order on admin side-----------------------------------------*/


app.get("/api/displayorders",(req,resp)=>{
      
    const ins = "select * from product_orders as a , create_product as b where a.Pr_id=b.Pr_id";
    con.query(ins,(err,result)=>{
        console.log(result);
        resp.send(result);
    });
});


/*---------------------------------------changing status-----------------------------------------*/

app.post("/api/changestatus",(req,resp)=>{

var statusorderid = req.body.orderid;
var  statuschange ="Shipped";


console.log(statusorderid);
console.log(statuschange);

    const query=" UPDATE product_orders  SET  order_status = ? WHERE order_id= ? ";
    con.query(query,[statuschange,statusorderid]);
    resp.send({message:" Updated !! "});
    resp.send

    
    });

  
/*---------------------------------------display order in myorder-----------------------------------------*/

 app.get('/api/displaymyorder',(req,resp)=>{
     
    var uemail=req.query.uemail;
    console.log(uemail);
    const ins = "select a.*,b.* from create_product as a , product_orders as b where a.Pr_id=b.Pr_id and b.user_id=?";
   
    con.query(ins,[uemail],(err,result)=>{
        console.log(result);
        resp.send(result);
    });
});



    
        
/*---------------------------------------product invoice -----------------------------------------*/

app.post("/api/disproinvoice",(req,resp)=>{
    
    var profinid = req.body.finid;
    var proemail = req.body.uemail;
   console.log(profinid );
   //console.log(proemail);

    const query="Select * from product_orders where finaloid=? ";
    con.query(query,[profinid],(err,result)=>{
        if(result.length > 0)
        {
           
            resp.send({message:" Display invoice !! "});
       
           
        }
    });
});



/*---------------------------------------display orders in invoice-----------------------------------------*/

app.get('/api/invoicedisplay',(req,resp)=>{
    
    
    var invoicepro=req.query.name;
    console.log(invoicepro);


   // var uemail=req.query.uemail;
    //console.log(uemail);
    
    const ins = "select a.*,b.* from create_product as a , product_orders as b where a.Pr_id=b.Pr_id and b.finaloid=?";
   
    con.query(ins,[invoicepro],(err,result)=>{
        console.log(result);
        resp.send(result);
    });
  
        
});


/*---------------------------------------Forget Password----------------------------------------*/


app.post("/api/forgetpass",(req,resp)=>{
    
    var forgetemail = req.body.email;
    
    const query="Select * from user_registration where user_email=?  ";
    con.query(query,[forgetemail],(err,result)=>{
        if(result.length > 0)
        {
           resp.send(result);
          var forgetpass=result[0].user_password;
          var forgetname=result[0].user_fullname;

           const smtpTransport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: "astha.d.2501@gmail.com",
              pass: "fehhmqyvrvqsdqxs",
            },
          });
          const message = {
            from: "astha.d.2501@gmail.com",
            to: forgetemail,
          
            subject: "Lavishly Leathers Security",
            text: "Hello, " + forgetname + "\n"+ "\n" + "Your Password is :  "    +   forgetpass +".",
          };

         smtpTransport.sendMail(message, (error, info) => {
            if (error) {
              console.error(error);
            } else {
              //console.log("Email sent:", info.response);
              resp.send({message:"Password Send on Email Id!!!"});
            }
          });

        }
        else
        {
        resp.send({message:"You do not have an account !!"});
        }
     });
    }
  
    );



/*---------------------------------------display custumers on admin side-----------------------------------------*/


app.get("/api/displaycust",(req,resp)=>{
      
    const ins = "select * from user_registration";
    con.query(ins,(err,result)=>{
        console.log(result);
        resp.send(result);
    });
});



/*---------------------------------------edit profile on admin side-----------------------------------------*/

app.post("/api/newadmprofile",(req,resp)=>{

    
    var orderemail = req.body.uemail;
    //var orderpass = req.body.upass;

    var editname = req.body.name;
    //var editemail = req.body.email;
    var editpass = req.body.pass;
    var editpass1 = req.body.pass1;
console.log(editname);
//console.log(editemail);
console.log(editpass);
console.log(editpass1);

console.log(orderemail);

const query="Select * from  admin_login  where  AL_password = ? and  AL_email =?  ";
con.query(query,[editpass,orderemail],(err,result)=>{
    if(result.length > 0)
{
        const query=" UPDATE admin_login  SET  admin_name = ? , AL_password = ?   WHERE  AL_email =?";
        con.query(query,[editname,editpass1,orderemail]);
        resp.send({message:" Details Updated !! "});
      resp.send
  
}   

       
  });

});


  
/*---------------------------------------    count total user   -----------------------------------------*/

app.get("/api/countuser",(req, resp)=>{
//console.log("call");
      
    const query = "SELECT COUNT(user_id) as total FROM user_registration";
    con.query(query,(err,result)=>{
        //console.log(result);
       // console.log("result");
        resp.send(result);
    });
});



/*---------------------------------------    count total orders  -----------------------------------------*/

app.get("/api/countorder",(req, resp)=>{
    //console.log("call");
          
        const query = "SELECT COUNT(order_id) as total1 FROM product_orders";
        con.query(query,(err,result)=>{
           // console.log(result);
           // console.log("result");
            resp.send(result);
        });
    });



/*---------------------------------------    count total product displayed -----------------------------------------*/

app.get("/api/countproduct",(req, resp)=>{
    //console.log("call");
          
        const query = "SELECT COUNT(Pr_id) as total2 FROM create_product";
        con.query(query,(err,result)=>{
            //console.log(result);
           // console.log("result");
            resp.send(result);
        });
    });




/*---------------------------------------   Single Product Page   -----------------------------------------*/


app.get('/api/singlepro1',(req,resp)=>{
    
    
    var prodis=req.query.name;
    console.log(prodis);


    //var quantity=result[0].Cart_quantity;

    const ins = "select * from create_product Where Pr_id =?";
   
    con.query(ins,[prodis],(err,result)=>{
        console.log(result);
        resp.send(result);
    });
  
        
});



/*---------------------------------------    search   -----------------------------------------*/


app.get("/api/searchpro",(req,resp)=>{
    
   
var prosearch = req.query.search;

const ins = "SELECT * FROM create_product WHERE P_name LIKE ?";

con.query(ins, [`%${prosearch}%`], (err, result) => {
  console.log(result);
  if (result.length > 0) {
    console.log("result");
    resp.send(result);
  } else {
    resp.send({ message: "Product not found !!" });
  }
});
       
    });




app.listen(1337);