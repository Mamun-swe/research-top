import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Images } from "../../utils/images"
import { Text } from "../../components/text"
import { Navbar } from "../../components/navabr"
import { Footer } from "../../components/footer"
import { WorkCard } from "../../components/card/work"
import { EducationCard } from "../../components/card/education"
import { BookOpen, Flag, MapPin, User } from "react-feather"

const index = () => {
    return (
        <div>
            <Head>
                <title>ResearchTop || researcher profiles</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar user={""} />

            <div className="container mx-auto mt-[74px] py-[30px]">
                <div className="grid grid-cols-1">
                    <div className="lg:flex">

                        {/* Profile information */}
                        <div className="w-full lg:w-[350px] mb-10 lg:mb-0 lg:pr-5">
                            <div className="text-center lg:text-left mb-4">
                                <Image
                                    src={Images.Avatar}
                                    alt="avatar"
                                    width={150}
                                    height={150}
                                />

                                <Text className="text-md font-medium capitalize">abdullah al mamun</Text>
                            </div>

                            <div>

                                {/* About */}
                                <Text className="text-sm font-normal text-gray-500 mb-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                    molestiae quas vel sint commodi repudiandae consequuntur.
                                </Text>

                                {/* Address */}
                                <table className="table-auto mb-4">
                                    <tbody>
                                        <tr>
                                            <td className="w-[25px]">
                                                <MapPin size={16} />
                                            </td>
                                            <td>
                                                <Text className="text-sm font-normal text-gray-500">Dhaka</Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-[25px]">
                                                <Flag size={16} />
                                            </td>
                                            <td>
                                                <Text className="text-sm font-normal text-gray-500">Bangladesh</Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-[25px]">
                                                <BookOpen size={16} />
                                            </td>
                                            <td>
                                                <Text className="text-sm font-normal text-gray-500">10 publications</Text>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-[25px]">
                                                <User size={16} />
                                            </td>
                                            <td>
                                                <Text className="text-sm font-normal text-gray-500">
                                                    www.researchtop/researcher/mamun-swe
                                                </Text>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                {/* Work experience */}
                                <div className="mb-4">
                                    <Text className="text-sm font-medium mb-3">Work experience</Text>

                                    <WorkCard />
                                    <WorkCard />
                                </div>

                                {/* Education */}
                                <div>
                                    <Text className="text-sm font-medium mb-3">Education</Text>

                                    <EducationCard />
                                    <EducationCard />
                                </div>

                                {/* Other profiles */}
                                <div>
                                    <Text className="text-sm font-medium mb-3">Other profiles</Text>
                                </div>
                            </div>
                        </div>

                        {/* Publications list */}
                        <div className="grow p-5"></div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default index;