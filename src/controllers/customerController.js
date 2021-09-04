const controller = {};

controller.list = (req,res)=>{
    req.getConnection((err, conn)=>{
      conn.query('select *from customer',(err,customer)=>{
          if(err){
              //next(err)
              res.json(err);
          }
          res.render('customers',{
            data:customer
          })
      })
      
    });
};

controller.save = (req,res) =>{

    const data = req.body;

   req.getConnection((err,conn)=>{
       conn.query('insert into customer set ?',[data],(err,customer=>{
           res.redirect('/');
       }))
   })
};

controller.update = (req,res)=>{

    const id = req.params.id;
    const newCustomer = req.body;

    req.getConnection((err, conn)=>{
        conn.query('update customer set ? where id = ?',[newCustomer,id],(err,customer)=>{
            console.log(customer)
            res.redirect('/');
        })
        
      });

}


controller.edit = (req,res)=>{

    const id = req.params.id;

    req.getConnection((err, conn)=>{
        conn.query('select *from customer where id = ?',id,(err,customer)=>{
            console.log(customer)

            res.render('customer_edit',{
                data:customer[0]
            })
        })
        
      });

}

controller.delete = (req,res) =>{
     
    // const { id } = req.params;
    const id = req.params.id;

    req.getConnection((err,conn)=>{
        conn.query("delete from customer where id = ?",id,(err,customer=>{
            
            if(err){
                next(err);
            }

            res.redirect('/')
        }))
    })

};

module.exports = controller;
