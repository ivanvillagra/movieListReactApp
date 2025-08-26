export default function Login() {

    return (
        <div className=" flex justify-center items-center h-full">

            <div className=" w-full h-full  md:w-5/12 md:h-96 bg-pink-50 rounded shadow flex flex-col  justify-center p-7" id="login">

                <div>

                    <div className=" flex flex-col mt-4">
                        <label htmlFor="email" className="text-xl text-pink-500 font-bold mb-3.5">USER </label>
                        <input required type="email" className="w-full md:w-1/2 bg-white p-2 rounded  outline-none ring-none border-2 border-black focus:ring-2 focus:ring-pink-500" />
                    </div>

                    <div className=" flex flex-col mt-4">
                        <label htmlFor="password" className="text-xl text-pink-500 font-bold mb-3.5 ">PASSWORD  </label>
                        <input required type="password" className="w-full md:w-1/2 bg-white  p-2 rounded  outline-none ring-none border-2 border-black focus:ring-2 focus:ring-pink-500" />
                    </div>

                    <button className="w-full rounded bg-pink-500 text-xl text-pink-50 p-2 mt-4 font-bold hover:bg-pink-400">Log In</button>

                </div>

            </div>

        </div>

    );

}