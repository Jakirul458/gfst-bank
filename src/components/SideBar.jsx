
/*

import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import CreateSavingAccount from '../pages/CreateSavingAccount'
import Deposit from '../pages/Deposit'
import Withdraw from '../pages/Withdraw'
import AllAccounts from '../pages/AllAccounts'
import FindSavaingAccount from '../pages/FindSavaingAccount'
import MonthlySavingAudit from '../pages/MonthlySavingAudit'
import CreateLoanAccount from '../pages/CreateLoanAccount'
import LoanInstallment from '../pages/LoanInstallment'
import LoanAcounts from '../pages/LoanAcounts'
import FindLoanAccounts from '../pages/FindLoanAccounts'
import MonthlyLoanAudit from '../pages/MonthlyLoanAudit'
import CloseLoanAccount from '../pages/CloseLoanAccount'
import CreateInvestmentAccount from '../pages/CreateInvestmentAccount'
import Profit from '../pages/Profit'
import MonthlyInvestmentAudit from '../pages/MonthlyInvestmentAudit'
import InvestmentAccounts from '../pages/InvestmentAccounts'
import CloseInvestmentAccount from '../pages/CloseInvestmentAccount'

function SideBar() {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", backgroundColor: "teal", width: "20%", height: "80vh" }}>
                <div>
                    <h2 style={{ color: 'yellow' }}>Saving Account</h2>
                    <div>
                        <div></div>
                        <div> <NavLink to='/createsavingaccount'>Create  Account</NavLink></div>
                        <div><NavLink to='/deposit'> Deposit</NavLink></div>
                        <div><NavLink to='/withdraw'> Withdraw</NavLink></div>
                        <div><NavLink to='/allaccounts'> All Accounts</NavLink></div>
                        <div><NavLink to='/findsavingaccount'> Find Accounts</NavLink></div>
                        <div><NavLink to='/monthlysavingaudit'> Monthly Audit</NavLink></div>


                    </div>


                </div>
                <div>
                    <h2 style={{ color: 'yellow' }}>Loan Account</h2>
                    <div>
                        <div><NavLink to='/createloanaccount'>Create Account </NavLink></div>
                        <div><NavLink to='/loaninstallment'>Loan Installment </NavLink></div>
                        <div><NavLink to='/loanaccounts'>Loan Accounts </NavLink></div>
                        <div><NavLink to='findloanaccount/'>Find Loan Account </NavLink></div>
                        <div><NavLink to='/monthlyloanaudit'> Monthly Audit</NavLink></div>
                        <div><NavLink to='/closeloanaccount'>Close Account </NavLink></div>
                    </div>

                </div>
                <div>

                    <h2 style={{ color: 'yellow' }}>Investment </h2>
                    <div>
                        <div><NavLink to='/createinvestmentaccount'>Create Account </NavLink></div>
                        <div><NavLink to='/profit'> profit</NavLink></div>
                        <div><NavLink to='/monthlyinvestmentaudit'> Monthly Audit</NavLink></div>
                        <div><NavLink to='/investmentaccounts'> Investment Accounts</NavLink></div>
                        <div><NavLink to='/closeinvestmentaccount'>Close Accounts </NavLink></div>

                    </div>

                </div>

            </div>
            <div>
                <Routes>
                    <Route path="/createsavingaccount" element={<CreateSavingAccount />} />
                    <Route path="/deposit" element={<Deposit />} />
                    <Route path="/withdraw" element={<Withdraw />} />
                    <Route path="/allaccounts" element={<AllAccounts />} />
                    <Route path="/findsavingaccount" element={<FindSavaingAccount />} />
                    <Route path="/monthlysavingaudit" element={<MonthlySavingAudit />} />

                    <Route path="/createloanaccount" element={<CreateLoanAccount />} />
                    <Route path="/loaninstallment" element={<LoanInstallment />} />
                    <Route path="/loanaccounts" element={<LoanAcounts />} />
                    <Route path="/findloanaccount" element={<FindLoanAccounts />} />
                    <Route path="/monthlyloanaudit" element={<MonthlyLoanAudit />} />
                    <Route path="/closeloanaccount" element={<CloseLoanAccount />} />

                    <Route path="/createinvestmentaccount" element={<CreateInvestmentAccount />} />
                    <Route path="/profit" element={<Profit />} />
                    <Route path="/monthlyinvestmentaudit" element={<MonthlyInvestmentAudit />} />
                    <Route path="/investmentaccounts" element={<InvestmentAccounts />} />
                    <Route path="/closeinvestmentaccount" element={<CloseInvestmentAccount />} />



                </Routes>
            </div>
        </>

    )
}

export default SideBar;

*/
import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import CreateSavingAccount from '../pages/CreateSavingAccount';
import Deposit from '../pages/Deposit';
import Withdraw from '../pages/Withdraw';
import AllAccounts from '../pages/AllAccounts';
import FindSavaingAccount from '../pages/FindSavaingAccount';
import MonthlySavingAudit from '../pages/MonthlySavingAudit';
import CreateLoanAccount from '../pages/CreateLoanAccount';
import LoanInstallment from '../pages/LoanInstallment';
import LoanAcounts from '../pages/LoanAcounts';
import FindLoanAccounts from '../pages/FindLoanAccounts';
import MonthlyLoanAudit from '../pages/MonthlyLoanAudit';
import CloseLoanAccount from '../pages/CloseLoanAccount';
import CreateInvestmentAccount from '../pages/CreateInvestmentAccount';
import Profit from '../pages/Profit';
import MonthlyInvestmentAudit from '../pages/MonthlyInvestmentAudit';
import InvestmentAccounts from '../pages/InvestmentAccounts';
import CloseInvestmentAccount from '../pages/CloseInvestmentAccount';
import './SideBar.css';

function SideBar() {
    return (
        <div className="dashboard">
            <div className="sidebar">

                <div className="section">
                    <h2>Saving Account</h2>
                    <nav>
                        <NavLink to='/createsavingaccount'>Create Account</NavLink>
                        <NavLink to='/deposit'>Deposit</NavLink>
                        <NavLink to='/withdraw'>Withdraw</NavLink>
                        <NavLink to='/allaccounts'>All Accounts</NavLink>
                        <NavLink to='/findsavingaccount'>Find Accounts</NavLink>
                        <NavLink to='/monthlysavingaudit'>Monthly Audit</NavLink>
                    </nav>
                </div>

                <div className="section">
                    <h2>Loan Account</h2>
                    <nav>
                        <NavLink to='/createloanaccount'>Create Account</NavLink>
                        <NavLink to='/loaninstallment'>Loan Installment</NavLink>
                        <NavLink to='/loanaccounts'>Loan Accounts</NavLink>
                        <NavLink to='/findloanaccount'>Find Loan Account</NavLink>
                        <NavLink to='/monthlyloanaudit'>Monthly Audit</NavLink>
                        <NavLink to='/closeloanaccount'>Close Account</NavLink>
                    </nav>
                </div>

                <div className="section">
                    <h2>Investment</h2>
                    <nav>
                        <NavLink to='/createinvestmentaccount'>Create Account</NavLink>
                        <NavLink to='/profit'>Profit</NavLink>
                        <NavLink to='/monthlyinvestmentaudit'>Monthly Audit</NavLink>
                        <NavLink to='/investmentaccounts'>Investment Accounts</NavLink>
                        <NavLink to='/closeinvestmentaccount'>Close Accounts</NavLink>
                    </nav>
                </div>
                
            </div>
            <div className="content">
                <Routes>
                    <Route path="/createsavingaccount" element={<CreateSavingAccount />} />
                    <Route path="/deposit" element={<Deposit />} />
                    <Route path="/withdraw" element={<Withdraw />} />
                    <Route path="/allaccounts" element={<AllAccounts />} />
                    <Route path="/findsavingaccount" element={<FindSavaingAccount />} />
                    <Route path="/monthlysavingaudit" element={<MonthlySavingAudit />} />
                    <Route path="/createloanaccount" element={<CreateLoanAccount />} />
                    <Route path="/loaninstallment" element={<LoanInstallment />} />
                    <Route path="/loanaccounts" element={<LoanAcounts />} />
                    <Route path="/findloanaccount" element={<FindLoanAccounts />} />
                    <Route path="/monthlyloanaudit" element={<MonthlyLoanAudit />} />
                    <Route path="/closeloanaccount" element={<CloseLoanAccount />} />
                    <Route path="/createinvestmentaccount" element={<CreateInvestmentAccount />} />
                    <Route path="/profit" element={<Profit />} />
                    <Route path="/monthlyinvestmentaudit" element={<MonthlyInvestmentAudit />} />
                    <Route path="/investmentaccounts" element={<InvestmentAccounts />} />
                    <Route path="/closeinvestmentaccount" element={<CloseInvestmentAccount />} />
                </Routes>
            </div>
        </div>
    );
}

export default SideBar;
