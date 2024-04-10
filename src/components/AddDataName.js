"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePointContext } from './usePointContext';
import { useImageContext  } from '@/components/useImageContext'
import { useInputData } from '@/components/useInputData';

export default function AddDataName({ onShowNumberInput , currentInde, dataLength}) {
  const { data, newData, updateData } = usePointContext();
  const [name, setName] = useState("");
  const { image } = useImageContext();
  const { setNewDataPoint } = useInputData();

  const router = useRouter  ();
  
  useEffect(() => {
    if(dataLength > 0 && dataLength < currentInde){
      setNewDataPoint(newData)
      router.push('/Result')
    }
  }, []);

  const handleUpdateData = () => {
    updateData(name);
    onShowNumberInput(); // เมื่อคลิกปุ่ม Update Name ให้แสดง AddDataNumber แทน
  };

  return (
    <form className="flex flex-col justify-between items-center">
      <div className="flex flex-col w-full h-max max-h-fit lg:flex-row items-center ">
        {image && <img 
          src={(image)} 
          width={500}
          height={500}
          alt="Uploaded Image" 
          className='rounded-lg'
        />}
        
        <div className="text-3xl bg-white w-full rounded-[28px] drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] mt-8 lg:ml-12 lg:mt-0 lg:h-[500px]">
          <div className='p-8 rounded-tl-[28px] rounded-tr-[28px] bg-[#D9D9D9]'>
            <p>{currentInde} of {dataLength}</p>
          </div>
          <div className='p-6 h-full flex flex-col justify-between'>
            <div>
              <p className='mb-8'>Confirm antibiotic name</p>
              <select 
                className="border border-white border-b-stone-500 outline-none" 
                name="names" 
                id="names"
                onChange={(e) => setName(e.target.value)}
              >
                <option value="AMP: Ampicillin">AMP: Ampicillin</option>
                <option value="PIP: Piperacillin">PIP: Piperacillin</option>
                <option value="MEC: Mecillinam">MEC: Mecillinam</option>
                <option value="AMK: Amoxicillin-clavulanate">AMK: Amoxicillin-clavulanate</option>
                <option value="AMS: Ampicillin-sulbactam">AMS: Ampicillin-sulbactam</option>
                <option value="C/T: Ceftolozane-tazobactam">C/T: Ceftolozane-tazobactam</option>
                <option value="CZA: Ceftazidime-avibactam">CZA: Ceftazidime-avibactam</option>
                <option value=": Imipenem-relebactam">: Imipenem-relebactam</option>
                <option value="MEV: Meropenem-vaborbactam">MEV: Meropenem-vaborbactam</option>
                <option value="TZP: Piperacillin-tazobactam">TZP: Piperacillin-tazobactam</option>
                <option value=": Ticarcillin-clavulanate">: Ticarcillin-clavulanate</option>
                <option value="CZO: Cefazolin">CZO: Cefazolin</option>
                <option value="CPT: Ceftaroline">CPT: Ceftaroline</option>
                <option value="FEP: Cefepime">FEP: Cefepime</option>
                <option value="CTX: Cefotaxime">CTX: Cefotaxime</option>
                <option value="CRO: Ceftriaxone">CRO: Ceftriaxone</option>
                <option value="CTT: Cefotetan">CTT: Cefotetan</option>
                <option value="FOX: Cefoxitin">FOX: Cefoxitin</option>
                <option value=": Cefuroxime (parenteral)">: Cefuroxime (parenteral)</option>
                <option value="CAZ: Ceftazidime">CAZ: Ceftazidime</option>
                <option value="MAN: Cefamandole">MAN: Cefamandole</option>
                <option value=": Cefmetazole">: Cefmetazole</option>
                <option value=": Cefonicid">: Cefonicid</option>
                <option value="CFP: Cefoperazone">CFP: Cefoperazone</option>
                <option value="CZX: Ceftizoxime">CZX: Ceftizoxime</option>
                <option value="MOX: Moxalactam">MOX: Moxalactam</option>
                <option value=": Cefiderocol">: Cefiderocol</option>
                <option value="CXM: Cefuroxime">CXM: Cefuroxime</option>
                <option value=": Cefazolin (surrogate test for oral cephalosporins and uncomplicated UTIs)">: Cefazolin (surrogate test for oral cephalosporins and uncomplicated UTIs)</option>
                <option value=": Loracarbef">: Loracarbef</option>
                <option value="CEC: Cefaclor">CEC: Cefaclor</option>
                <option value=": Cefdinir">: Cefdinir</option>
                <option value="CFM: Cefixime">CFM: Cefixime</option>
                <option value="CPD: Cefpodoxime">CPD: Cefpodoxime</option>
                <option value=": Cefprozil">: Cefprozil</option>
                <option value=": Cefetamet">: Cefetamet</option>
                <option value="CTB: Ceftibuten">CTB: Ceftibuten</option>
                <option value="ATM: Aztreonam">ATM: Aztreonam</option>
                <option value="DOR: Doripenem">DOR: Doripenem</option>
                <option value="ETP: Ertapenem">ETP: Ertapenem</option>
                <option value="IPM: Imipenem">IPM: Imipenem</option>
                <option value="MEM: Meropenem">MEM: Meropenem</option>
                <option value="COL: Colistin">COL: Colistin</option>
                <option value=": Polymyxin B">: Polymyxin B</option>
                <option value="GEN: Gentamicin">GEN: Gentamicin</option>
                <option value="TOB: Tobramycin">TOB: Tobramycin</option>
                <option value="AMK: Amikacin">AMK: Amikacin</option>
                <option value="KAN: Kanamycin">KAN: Kanamycin</option>
                <option value="NET: Netilmicin">NET: Netilmicin</option>
                <option value="STR: Streptomycin">STR: Streptomycin</option>
                <option value="AZM: Azithromycin">AZM: Azithromycin</option>
                <option value="TCY: Tetracycline">TCY: Tetracycline</option>
                <option value="DOX: Doxycycline">DOX: Doxycycline</option>
                <option value="MNO: Minocycline">MNO: Minocycline</option>
                <option value="CIP: Ciprofloxacin">CIP: Ciprofloxacin</option>
                <option value="LVX: Levofloxacin">LVX: Levofloxacin</option>
                <option value=": Cinoxacin">: Cinoxacin</option>
                <option value="ENX: Enoxacin">ENX: Enoxacin</option>
                <option value="GAT: Gatifloxacin">GAT: Gatifloxacin</option>
                <option value=": Gemifloxacin">: Gemifloxacin</option>
                <option value=": Grepafloxacin">: Grepafloxacin</option>
                <option value="LOM: Lomefloxacin">LOM: Lomefloxacin</option>
                <option value="NAL: Nalidixic acid">NAL: Nalidixic acid</option>
                <option value="NOR: Norfloxacin">NOR: Norfloxacin</option>
                <option value="OFX: Ofloxacin">OFX: Ofloxacin</option>
                <option value=": Fleroxacin">: Fleroxacin</option>
                <option value=": Pefloxacin (surrogate test for ciprofloxacin)">: Pefloxacin (surrogate test for ciprofloxacin)</option>
                <option value=": Trimethoprim-sulfamethoxazole">: Trimethoprim-sulfamethoxazole</option>
                <option value="SSS: Sulfonamides">SSS: Sulfonamides</option>
                <option value="TMP: Trimethoprim">TMP: Trimethoprim</option>
                <option value="CHL: Chloramphenicol">CHL: Chloramphenicol</option>
                <option value="FOS: Fosfomycin">FOS: Fosfomycin</option>
                <option value="NIT: Nitrofurantoin">NIT: Nitrofurantoin</option>
                <option value=": Piperacillin-tazobactam">: Piperacillin-tazobactam</option>
                <option value=": Ceftolozane-avibactam">: Ceftolozane-avibactam</option>
                <option value=": Ceftazidime-tazobactam">: Ceftazidime-tazobactam</option>
                <option value=": Colistin or polymyxin B">: Colistin or polymyxin B</option>
                <option value=": Ampicillin-sulbactam">: Ampicillin-sulbactam</option>
                <option value=": Trimethoprim- sulfamethoxazole">: Trimethoprim- sulfamethoxazole</option>
                <option value=": Penicillin">: Penicillin</option>
                <option value="VAN: Vancomycin">VAN: Vancomycin</option>
                <option value="DAL: Dalbavancin">DAL: Dalbavancin</option>
                <option value="ORI: Oritavancin">ORI: Oritavancin</option>
                <option value="TLV: Telavancin">TLV: Telavancin</option>
                <option value="TEC: Teicoplanin">TEC: Teicoplanin</option>
                <option value="ERY: Erythromycin">ERY: Erythromycin</option>
                <option value="RIF: Rifampin">RIF: Rifampin</option>
                <option value=": Quinupristin-dalfopristin">: Quinupristin-dalfopristin</option>
                <option value="LNZ: Linezolid">LNZ: Linezolid</option>
                <option value="TZD: Tedizolid">TZD: Tedizolid</option>
                <option value=": Amoxicillin-clavulanate">: Amoxicillin-clavulanate</option>
                <option value="CLR: Clarithromycin">CLR: Clarithromycin</option>
                <option value="MFX: Moxifloxacin">MFX: Moxifloxacin</option>
                <option value="SPX: Sparfloxacin">SPX: Sparfloxacin</option>
                <option value="TVA: Trovafloxacin">TVA: Trovafloxacin</option>
                <option value=": Trimethoprim-Sulfamethoxazole">: Trimethoprim-Sulfamethoxazole</option>


              </select>
            </div>
            {/* <p>This is correct</p> */}
          </div>
        </div>
      </div>

      <div className="flex w-full justify-end m-8 ">
        <button 
          className="font-bold drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] text-3xl py-5 px-24 rounded-full bg-[#CDCDCD]"
          type="button" onClick={() => handleUpdateData(name)}
        >
          NEXT
        </button>
      </div>
    </form>
  );
};
