import Hero from "~~/components/Hero";
import { MetaHeader } from "~~/components/MetaHeader";

export default function schedule() {
    return (
        <div>
            <MetaHeader />

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Confirm Spot!</h1>
                        <p className="py-6"> </p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="email" placeholder="0x145F569B9D46F509286a66e4597FC5cC2Ec0fdE4" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Amount</span>
                                </label>
                                <input type="password" placeholder={} className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Stake</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>


    )
}