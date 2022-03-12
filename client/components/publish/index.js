
import Image from "next/image"
import { Text } from "../text"
import { Images } from "../../utils/images"
import { useWindowSize } from "../window"

export const Publish = () => {
    const window = useWindowSize()

    const responsiveImage = () => {
        let width = 250
        let height = 160

        if (window.width >= 640) {
            width = 280
            height = 200
        }

        if (window.width >= 768) {
            width = 350
            height = 230
        }

        return { width, height }
    }

    return (
        <div className="pb-[60px] lg:pb-[120px]">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="text-center lg:text-left">
                        <Image
                            src={Images.Check}
                            alt="Check"
                            width={responsiveImage().width}
                            height={responsiveImage().height}
                        />
                    </div>
                    <div className="text-center lg:text-left py-3">
                        <Text className="mb-5 font-extrabold text-transparent text-3xl md:text-4xl bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-300"
                        >Publish to journal</Text>

                        <Text className="text-md text-gray-400 font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    );
}