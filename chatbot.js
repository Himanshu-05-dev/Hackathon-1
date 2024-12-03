const responses = {
    "finance": "Finance is the study and management of money and it involves a variety of activities like investing,lending,budgeting and saving.",
    "account": "The term account refers to a storage place for money ,gold and jewelleries.",
    "bank account": "The term bank account refers to having a space in the bank to hokd your money , gold and jewellery.",
    // Accounts
    "savings account": "A savings account is for individuals to save money and earn interest.",
    "current account": "A current account is used for frequent transactions, typically by businesses.",
    "difference between savings account and current account": "A savings account helps save money and earn interest, while a current account facilitates daily transactions.",

    // Budgeting
    "personal budget": "To create a personal budget, list your income, track expenses, and ensure spending doesn't exceed earnings.",
    "budgeting tips": "Track your income and expenses, categorize spending, and set realistic saving goals.",
    "how to budget": "Start by tracking all your expenses, prioritize essentials, and allocate a portion for savings.",

    // Investments
    "types of investments": "Common investments include stocks, bonds, mutual funds, real estate, and gold.",
    "stocks": "Stocks are equity investments that represent ownership in a company.",
    "mutual funds": "Mutual funds pool money from investors to invest in diversified portfolios.",
    "real estate": "Real estate investment involves buying properties to earn rental income or profit from sales.",
    "cryptocurrency": "Cryptocurrency is a digital or virtual currency that uses blockchain technology.",
    "bonds": "Bonds are fixed-income investments where you lend money to a borrower in exchange for interest.",

    // Interest
    "compound interest": "Compound interest is interest calculated on the initial principal and accumulated interest.",
    "simple interest": "Simple interest is calculated only on the principal amount.",
    "difference between compound and simple interest": "Compound interest grows faster as it includes previously earned interest, unlike simple interest.",

    // Credit and Debt
    "credit score": "A credit score measures your creditworthiness. A high score improves your chances of getting loans.",
    "improve credit score": "To improve your credit score, pay bills on time, reduce debt, and avoid unnecessary credit inquiries.",
    "credit card": "A credit card allows you to borrow funds up to a limit and repay them later.",
    "debit card": "A debit card uses your bank balance for transactions.",
    "difference between credit and debit card": "A credit card involves borrowing, while a debit card uses your existing funds.",

    // Financial Planning
    "financial plan": "A financial plan includes budgeting, saving, investing, managing risks, and setting goals.",
    "retirement planning": "Plan for retirement by starting early, saving consistently, and diversifying investments.",
    "emergency fund": "An emergency fund is 3-6 months' worth of expenses to cover unexpected financial needs.",
    "long-term goals": "Long-term financial goals often include retirement, buying a home, or saving for education.",

    // Inflation and Economy
    "inflation": "Inflation is the rise in prices over time, reducing your money's purchasing power.",
    "impact of inflation": "Inflation decreases the value of money, making it essential to invest for growth.",
    "recession": "A recession is a period of economic decline marked by reduced activity and high unemployment.",

    // Taxation
    "tax calculator": "A tax calculator estimates your taxes based on your income and deductions.",
    "income tax": "Income tax is a direct tax imposed on your earnings by the government.",
    "deductions": "Deductions reduce your taxable income and help lower the amount you owe in taxes.",
    "capital gains tax": "Capital gains tax is levied on the profit earned from selling an asset like property or stocks.",

    // Loans and EMIs
    "loan emi": "An EMI (Equated Monthly Installment) is a fixed monthly repayment for a loan.",
    "loan types": "Loans can include personal loans, home loans, car loans, and business loans.",
    "how to apply for a loan": "Check your credit score, compare lenders, and understand the repayment terms before applying.",
    "mortgage": "A mortgage is a secured loan used to purchase real estate, repaid over time with interest.",

    // Saving and Wealth Building
    "financial health": "Maintain financial health by budgeting, saving, reducing debt, and investing wisely.",
    "how to save money": "To save money, prioritize needs over wants, track expenses, and automate savings.",
    "wealth building": "Wealth building involves earning, saving, and investing systematically over time.",
    "passive income": "Passive income is earnings from investments, rental properties, or side ventures with minimal effort.",

    // Business Finance
    "business finance": "Business finance involves managing the funds required for business operations and growth.",
    "working capital": "Working capital is the difference between current assets and current liabilities, indicating liquidity.",
    "financial risk": "Financial risk refers to the possibility of losing money in business or investments.",
    "role of business analyst": "Business analysts assess data to identify financial risks and suggest strategic solutions.",
    "business analyst": "Business analysts assess data to identify financial risks and suggest strategic solutions.",

    // Expense Tracking
    "expense tracker": "An expense tracker helps monitor spending and stay within your budget.",
    "how to track expenses": "Use apps or spreadsheets to categorize and monitor all your spending.",
    "monthly budget": "A monthly budget helps allocate funds to essentials, savings, and discretionary spending.",

    // Financial Mistakes
    "financial mistakes": "Common mistakes include overspending, neglecting savings, and failing to plan for emergencies.",
    "how to avoid debt": "Avoid debt by living within your means, avoiding impulse purchases, and prioritizing repayments.",
    "investment mistakes": "Mistakes include lack of research, emotional investing, and ignoring diversification.",

    // Miscellaneous
    "net worth": "Net worth is the value of your assets minus your liabilities.",
    "diversification": "Diversification reduces risk by spreading investments across various asset classes.",
    "active vs passive investing": "Active investing involves frequent trades, while passive investing focuses on long-term growth.",
    "financial independence": "Achieve financial independence by saving, investing, and creating income streams to cover expenses.",

        "stock": "A stock represents a share in the ownership of a company and constitutes a claim on part of the company’s assets and earnings.",
        "bond": "A bond is a fixed income instrument that represents a loan made by an investor to a borrower, typically corporate or governmental.",
        "etf": "An ETF(Exchange-Traded Fund) is a type of investment fund and exchange-traded product that holds assets such as stocks, commodities, or bonds and trades on stock exchanges.",
        "mutual fund": "A mutual fund is an investment vehicle made up of a pool of money collected from many investors to invest in securities like stocks, bonds, or other assets.",
        "diversification": "Diversification is a risk management strategy that mixes a wide variety of investments within a portfolio to reduce exposure to any single asset or risk.",
        "dividend": "A dividend is a payment made by a corporation to its shareholders, usually in the form of cash or additional shares, representing a portion of the company’s earnings.",
        "market capitalization": "Market capitalization is the total market value of a company's outstanding shares of stock, calculated by multiplying the stock price by the total number of outstanding shares.",
        "index fund": "An index fund is a type of mutual fund or ETF that aims to replicate the performance of a specific index, such as the S&P 500.",
        "bull market": "A bull market is a financial market condition characterized by rising prices, typically associated with investor confidence and expectations of continued strong performance.",
        "bear market": "A bear market is a condition in which securities prices fall by 20% or more from recent highs, often associated with widespread pessimism and negative investor sentiment.",

        "asset": "An asset is any resource owned by an individual or entity that is expected to provide future economic benefits, such as cash, real estate, or investments.",
        "liability": "A liability is a financial obligation or debt that an individual or company owes to another party, which can include loans, accounts payable, and mortgages.",
        "equity": "Equity represents the ownership value in an asset or company after deducting liabilities. In the context of a company, it refers to shareholders' equity.",
        "credit score": "A credit score is a numerical representation of a person's creditworthiness, based on their credit history, used by lenders to assess the risk of lending money.",
        "inflation": "Inflation is the rate at which the general level of prices for goods and services rises, eroding purchasing power over time.",
        "recession": "A recession is a significant decline in economic activity across the economy, lasting more than a few months, typically visible in GDP, income, employment, and retail sales.",
        "hedge fund": "A hedge fund is an investment fund that employs various strategies to earn active returns for its investors, often using leverage and derivatives.",
        "portfolio": "A portfolio is a collection of financial investments, such as stocks, bonds, commodities, and cash, held by an individual or institution.",
        "financial statement": "A financial statement is a formal record of the financial activities and position of a business, person, or entity, including the balance sheet, income statement, and cash flow statement.",
        "capital gain": "A capital gain is the profit realized from the sale of an asset when the selling price exceeds the purchase price.",
        "bear market": "A bear market is a market condition characterized by a prolonged decline in investment prices, typically defined as a drop of 20% or more from recent highs.",
        "leverage": "Leverage is the use of borrowed capital to increase the potential return on investment, which can also increase the risk of loss.",
        "margin call": "A margin call occurs when a broker demands that an investor deposit additional money or securities into their margin account to cover potential losses.",
        "fiscal policy": "Fiscal policy refers to the use of government spending and taxation to influence the economy, aiming to promote economic growth and stability.",
        "monetary policy": "Monetary policy involves the management of a country's money supply and interest rates by its central bank to control inflation and stabilize the currency.",
    
    
};


const chatArea = document.getElementById("chat-area");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

function addMessage(message, isBot = true) {
    const messageDiv = document.createElement("div");
    messageDiv.className = isBot ? "bot-message" : "user-message";
    messageDiv.innerText = message;
    chatArea.appendChild(messageDiv);
    chatArea.scrollTop = chatArea.scrollHeight;
}

sendBtn.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, false);
        const lowerMessage = userMessage.toLowerCase();
        let foundResponse = false;

        for (const [key, response] of Object.entries(responses)) {
            if (lowerMessage.includes(key)) {
                addMessage(response);
                foundResponse = true;
                break;
            }
        }

        if (!foundResponse) {
            addMessage("I'm sorry, I don't have an answer for that. Please ask about finance-related topics!");
        }
        userInput.value = "";
    }
});
document.getElementById("clear-btn").addEventListener("click", function () {
    chatArea.innerHTML = ""; // Clear all chat messages
});
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendBtn.click();
});
