describe('Helpers.test with initialization and tear-down', function() {
   beforeAll( function(){
      //initialization logic
      //console.log(allPayments);
      let payment1 = {
         billAmt: '50',
         tipAmt: '10',
         tipPercent: '20'
      }
      let payment2 = {
         billAmt: '100',
         tipAmt: '10',
         tipPercent: '20'
      }
      allPayments = {
         payment1, 
         payment2
      }

      
   })
   describe('Tests for sumPaymentTotal(type)', function(){
      //sumPaymentTotal(type)
      it('should calculate tip percent correctly', function(){
      expect(sumPaymentTotal('tipPercent')).toEqual(40);
      //expect(allServers["server1"].serverName).toEqual('Alice');
      })
      it('should calculate tipAmt correctly', function(){
         expect(sumPaymentTotal('tipAmt')).toEqual(20);
      })
      it('should calculate billAmt correctly', function(){
         expect(sumPaymentTotal('billAmt')).toEqual(150);
      })
   })
   
   describe('Tests for calculateTipPercent(billAmt, tipAmt)', function(){
      it('should calculate tip amount correctly', function(){
         expect(calculateTipPercent(100,20)).toEqual(20);
      })
   }) 
   
   describe('tests for appendTd(tr, value)',function(){
      let newTrElement = document.createElement('tr');
      it('should create a td and append to the tr', function(){
         appendTd(newTrElement, "text");
         expect(newTrElement.children[0].innerHTML).toEqual('text');
      })
   })

   afterAll(function(){
      allPayments = {};
   })
   
});



