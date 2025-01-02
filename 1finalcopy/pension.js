document.getElementById("calculate-button").addEventListener("click", calculatePlans);

    function calculatePlans() {
      const investment = parseFloat(document.getElementById("investment").value);
      const timePeriod = parseInt(document.getElementById("time-period").value);

      if (isNaN(investment) || isNaN(timePeriod) || investment <= 0 || timePeriod <= 0) {
        alert("Please enter valid inputs.");
        return;
      }

      const plans = [
        { name: "TATA AIA", rate: 12.4, link: "https://lifeinsurance.policybazaar.com/TataCGN?EnquiryID=IMQr5Yk3p7ROkwFNa3tGJLTCk8ce8HOKMz2FlNvANSaT%2bBdPMv5ZZbK2ca%2fRpMSTWY0yYqXRuh8ZXEadN5W09w%3d%3d&PlanID=81614&WOP=false&FIB=false" },
        { name: "MAX LIFE", rate: 10.9, link: "https://lifeinsurance.policybazaar.com/MaxSavings?EnquiryID=IMQr5Yk3p7ROkwFNa3tGJLTCk8ce8HOKMz2FlNvANSaT%2bBdPMv5ZZbK2ca%2fRpMSTWY0yYqXRuh8ZXEadN5W09w%3d%3d&PlanID=81339" },
        { name: "PNB MetLIFE", rate: 8.2, link: "https://buylifeinsurance.policybazaar.com/PNBE2E/?EnquiryID=IMQr5Yk3p7ROkwFNa3tGJLTCk8ce8HOKMz2FlNvANSaT%2BBdPMv5ZZbK2ca%2FRpMSTWY0yYqXRuh8ZXEadN5W09w%3D%3D&PlanID=81408" },
        { name: "HDFC Life", rate: 7.7, link: "https://buylifeinsurance.policybazaar.com/HDFCE2E/?EnquiryID=IMQr5Yk3p7ROkwFNa3tGJLTCk8ce8HOKMz2FlNvANSaT%2BBdPMv5ZZbK2ca%2FRpMSTWY0yYqXRuh8ZXEadN5W09w%3D%3D&PlanID=10522" },
        { name: "SBI Life", rate: 12, link: "https://lifeinsurance.policybazaar.com/SBIRetireSmartPlus/?EnquiryID=IMQr5Yk3p7ROkwFNa3tGJAQ8nQUAbw%2fp2gTE2u4iWRdnFxcjKd62fnGrl1lLbuhAanHf1xjiNJFJEJlGNawiLQ%3d%3d&PlanID=80976" },
        { name: "ICICI predentials", rate: 12.7, link: "https://lifeinsurance.policybazaar.com/ipruinvestment/?EnquiryID=IMQr5Yk3p7ROkwFNa3tGJAQ8nQUAbw%2Fp2gTE2u4iWRdnFxcjKd62fnGrl1lLbuhAanHf1xjiNJFJEJlGNawiLQ%3D%3D&PlanID=81535&WOP=false&FIB=false&RetirementAge=65&isHigh=true&isSecure=false&AnnualPremium=120000&PlanType=2&qfppt=10&qfpt=20&pstPred=1&pstperYer=10&IncomeMode=12&sumassured=0&isOffline=0&ProjectionPercent=12.66&mode-of-premium=12&PerformanceYear=10&PerformanceRate=12.66&PayTerm=10&PolicyTerm=20&swp=5&pfn=Pension%20Opportunities%20Fund" },
        { name: "Canara HSBC", rate: 7.4, link: "https://lifeinsurance.policybazaar.com/CanaraPromise4Growth/?EnquiryID=IMQr5Yk3p7ROkwFNa3tGJLTCk8ce8HOKMz2FlNvANSaT%2bBdPMv5ZZbK2ca%2fRpMSTWY0yYqXRuh8ZXEadN5W09w%3d%3d&PlanID=79243&WOP=false&FIB=false&RetirementAge=65&isHigh=true&isSecure=false&AnnualPremium=120000&PlanType=2&qfppt=10&qfpt=15&pstPred=1&pstperYer=10&payinityr=13&payyr=30&IncomeMode=12&sumassured=1204978&isOffline=0&ProjectionPercent=10.15&mode-of-premium=12&PerformanceYear=10&PerformanceRate=10.15&PayTerm=10&PolicyTerm=42&swp=5&pfn=Growth%20Plus%20Fund&pt_cg=42"},
        { name: "ALLIANZ", rate: 15.5, link: "https://buylifeinsurance.policybazaar.com/BajajE2E/?EnquiryID=IMQr5Yk3p7ROkwFNa3tGJLTCk8ce8HOKMz2FlNvANSaT%2BBdPMv5ZZbK2ca%2FRpMSTWY0yYqXRuh8ZXEadN5W09w%3D%3D&PlanID=99640&WOP=false&FIB=false&RetirementAge=65&isHigh=true&isSecure=false&AnnualPremium=120000&PlanType=2&qfppt=10&qfpt=15&pstPred=1&pstperYer=10&IncomeMode=12&sumassured=1200000&isOffline=0&ProjectionPercent=15.54&mode-of-premium=12&PerformanceYear=10&PerformanceRate=15.54&PayTerm=10&PolicyTerm=15&swp=5&pfn=Accelerator%20Mid-Cap%20Fund%20II"},
        { name: "KOTAK Life", rate: 14.5, link: "https://lifeinsurance.policybazaar.com/E-Invest/?EnquiryID=IMQr5Yk3p7ROkwFNa3tGJLTCk8ce8HOKMz2FlNvANSaT%2bBdPMv5ZZbK2ca%2fRpMSTWY0yYqXRuh8ZXEadN5W09w%3d%3d&PlanID=76899&WOP=false&FIB=false&RetirementAge=65&isHigh=true&isSecure=false&AnnualPremium=120000&PlanType=2&qfppt=10&qfpt=15&pstPred=1&pstperYer=10&IncomeMode=12&sumassured=1200000&isOffline=0&ProjectionPercent=14.54&mode-of-premium=12&PerformanceYear=10&PerformanceRate=14.54&PayTerm=10&PolicyTerm=49&swp=5&pfn=Frontline%20Equity%20Fund"},
      ];

      const planContainer = document.getElementById("plan-container");
      planContainer.innerHTML = "";

      plans.forEach(plan => {
        const totalInvestment = investment * 12 * timePeriod;
        const monthlyRate = plan.rate / 12 / 100;
        const months = timePeriod * 12;

        const fvAtEndOfInvestments = investment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
        const extraGrowthMonths = 5 * 12;
        const fvAfterExtraGrowth = fvAtEndOfInvestments * Math.pow(1 + monthlyRate, extraGrowthMonths);
        let monthlyPension = fvAfterExtraGrowth / 240;
        monthlyPension *= 0.8;
        const taxSavings = (totalInvestment * 0.3).toFixed(2);

        const planCard = document.createElement("div");
        planCard.className = "plan-card";

        planCard.innerHTML = `
          <div class="plan-header">
            <h3>${plan.name}</h3>
            <p>Annual Returns: <span class="highlight">${plan.rate}%</span></p>
            <p>Tax free</p>
          </div>
          <div class="plan-benefits">
            <ul>
              <li>Total Investment: <span class="highlight">₹${totalInvestment.toFixed(2)}</span></li>
              <li>Pension from ${new Date().getFullYear() + timePeriod + 5}: <span class="highlight">₹${monthlyPension.toFixed(2)}/month</span></li>
            </ul>
          </div>
          <div class="plan-footer">
            <span class="tag green">Inbuilt Life Cover</span>
            <span class="tag red">Save Tax Upto ₹${taxSavings}</span>
            <a href="${plan.link}" target="_blank" class="explore-button">Get Details</a>
          </div>
        `;

        planContainer.appendChild(planCard);
      });
    }