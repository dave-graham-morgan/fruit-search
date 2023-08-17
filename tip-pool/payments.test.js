
describe('payments.test with initialization and tear-down', function(){
  
   beforeAll(function(){
      let billInput = document.getElementById('billAmt');
      let tipInput = document.getElementById('tipAmt');
      
      billInput.value = 150;
      tipInput.value = 30;
      submitPaymentInfo();

      billInput.value = 100;
      tipInput.value = 30;
      submitPaymentInfo();
   
   })

   //submitPaymentInfo
   describe('tests around submitPaymentInfo()', function(){

      it('should submit payments from the UI', function(){
         let billInput = document.getElementById('billAmt');
         billInput.value = 200;

         let tipInput = document.getElementById('tipAmt');
         tipInput.value = 20;
         submitPaymentInfo();

         let pmtTbleRow = document.querySelector('#payment3');

         //checkBillAmt
         expect(pmtTbleRow.firstElementChild.textContent).toEqual('$200');
         //checkTipAmt
         expect(pmtTbleRow.firstElementChild.nextElementSibling.textContent).toEqual('$20');
         //checkTipPercent
         expect(pmtTbleRow.firstElementChild.nextElementSibling
            .nextElementSibling.textContent).toEqual('10%');
         

         //checkSummary
         let sumTbleRow = document.querySelector('#summaryTable tbody tr');
         console.log(sumTbleRow);
         
         //checkBillAmt
         expect(sumTbleRow.firstElementChild.textContent).toEqual('$450');
         //checkTotalTip
         expect(sumTbleRow.firstElementChild.nextElementSibling.textContent).toEqual('$80')
         expect(sumTbleRow.firstElementChild.nextElementSibling
            .nextElementSibling.textContent).toEqual('20%');
        
      })

   })
   
   //createCurPayment
   describe('tests for createCurPayment', function(){
      it('should create a payment successfully', function(){
         let billInput = document.getElementById('billAmt');
         billInput.value = 100;

         let tipInput = document.getElementById('tipAmt');
         tipInput.value = 20;

         let currPayment = createCurPayment();

         expect(currPayment.billAmt).toEqual('100');
         expect(currPayment.tipAmt).toEqual('20');
         expect(currPayment.tipPercent).toEqual(20);
         billInput.value = '';
         tipInput.value = '';
      })
   })

   afterAll(function(){
      
      allPayments = {};

      //clear the payment table
      while (paymentTbody.firstChild){
         paymentTbody.removeChild(paymentTbody.firstChild);
      }
      //clear the summary table
      summaryTds.forEach(function(element){
         element.textContent = '';
      })
   })
})
