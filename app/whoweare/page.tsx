import { Text } from "@radix-ui/themes";

export default function WhoWeAre() {

    return (
        <div className=" flex flex-col">
            <div className=" h-14 bg-neutral-100 w-full left-0 top-0 flex justify-center ">
                <div className="header flex flex-row justify-between items-center">
                    <p className=" text-xl font-semibold">Who we are</p>
                    <p className=" text-sm">Home / Who we are</p>
                </div>
            </div>
            <div className="main flex flex-col pt-7">
                <Text size="7" weight="bold" className="w-full flex justify-center">WELCOME TO SOLEX HOMES</Text>
                <p className=" pt-4 pb-2 text-lg">
                    Solex Homes is a dynamic and international Finnish real estate company founded in 2013 
                    in Fuengirola. We are focused on selling properties to our international network of 
                    clients. We are also spesialized for property investments and buy to renovate to 
                    sell it with profit. From the very beginning, it has been important for us to look for 
                    our customers exactly what they are looking for. We have a wide selection of apartments 
                    on the Costa del Sol. Our office is located right in the center of Fuengirola, 50 meters 
                    from our bus station at Calle Jacinto Benavente 4. Welcome to the site or contact by phone 
                    or email, you can also leave a message to this site.
                    <br/>
                    We have been serving our customers for many years. We will help the whole apartment 
                    purchase process in the turnkey principle without any additional costs. 
                    Welcome as our customer!
                </p>
                <Text size="5" weight="bold" className=" pb-2 pt-6">TURN KEY SERVICE</Text>
                <p className="pb-2 text-lg">
                    We offer our customers a "turn key" service, which means you do not have to worry about 
                    eg opening electricity and water contracts, internet, translating contracts, etc. 
                    We will do it for you!
                </p>
                <Text size="5" weight="bold" className=" pb-2 pt-6">The first step to finding a cozy home is to submit an offer</Text>
                <p className="pb-2 text-lg">
                    Once the owner has accepted the offer, a reservation agreement is made and 
                    a booking fee is paid, usually between 3000 and 6000 euros, depending on the 
                    price of the apartment.
                    <br/>
                    Thereafter, a private purchase / sale agreement is concluded, which stipulates 
                    the terms of the sale and a down payment is normally paid which is usually 10% 
                    of the selling price. Your booking and deposit will be deducted from your agreed purchase price.
                    <br/>
                    The final stage of the transaction is a trade confirmation with the public notary 
                    and the signing of the official title deed. When an foreigner buys some real estate 
                    from Spain, he has to have a NIE number. This number can be obtained from the Police 
                    National Police in Spain. You will also need this NIE number to open a bank account in Spain.
                    <br/>
                    You may also want to use Attorneys' Services (Abogados) or Gestoria. Solex Homes 
                    offers its customers a "turn key" service that also includes attorney services. 
                    In Spain, all trades are done by a notary, and if the parties do not understand 
                    the Spanish, there always have to be an interpreter.
                </p>
                <Text size="5" weight="bold" className=" pb-2 pt-6">Cost of buying an apartment in Spain</Text>
                <p className="pb-2 text-lg">
                    In addition to the purchase price of the apartment, you have to pay about 
                    10% of the purchase price of the apartment. This approximately 10% consists of 
                    8% of the property tax, 1% of the notariats and registration fees, the lawyer's 
                    expenses are usually 1%, the use of a lawyer is recommended but not necessary. 
                    We are listening closely to our customers and looking for suitable solutions together.
                    <br/>
                    We have good relations with local banks and we can offer as many as 100% 
                    financing for part of the sale of apartments in Spain as the only real 
                    estate agent in Spain, but the main principle is 70% of the purchase price 
                    of the apartment with the Spanish banks.
                </p>
                <Text size="5" weight="bold" className=" pb-2 pt-6">Contact Us</Text>
                <p className="pb-2 text-lg">
                    We are active on social media, we love our site on Facebook, and we include the 
                    latest real estate deals and news.
                    <br/>
                    You can contact us by phone or email, you can also leave a message in the following form.
                    <br />
                    We will be happy to help you.
                </p>
            </div>
        </div>
    )
}