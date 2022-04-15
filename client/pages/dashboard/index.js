

import React, { useCallback, useEffect, useState } from "react"
import { Plus, Trash2 } from "react-feather"
import { withAuth } from "../../hook/with-auth"
import { dateTodate } from "../../utils/helper"
import { NetworkError } from "../../components/network-error"
import { DashboardPreloader } from "../../components/preloader"
import { DashboardLayout } from "../../components/dashboard-layout"
import { DashboardCover } from "../../components/dashboard/cover"
import { Modal } from "../../components/modal"
import { WorkForm } from "../../components/form/work"
import { EducationForm } from "../../components/form/education"
import { SocialForm } from "../../components/form/social"
import { Me } from "../api"
import { CircleIconButton, DangerButton } from "../../components/button"

const index = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [serverError, setServerError] = useState(false)
    const [work, setWork] = useState({ show: false, loading: false })
    const [education, setEducation] = useState({ show: false, loading: false })
    const [social, setSocial] = useState({ show: false, loading: false })

    /* fetch data */
    const fetchData = useCallback(async () => {
        try {
            const response = await Me()
            if (response && response.status === 200) {
                setData(response.data.data)
                setLoading(false)
            } else {
                setLoading(false)
                setServerError(true)
            }
        } catch (error) {
            if (error) {
                setLoading(false)
                setServerError(true)
            }
        }
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <div>
            <DashboardLayout>

                {isLoading && !serverError && !data ? <DashboardPreloader /> : null}
                {!isLoading && !data && serverError ? <NetworkError /> : null}

                {!isLoading && !serverError && data ?
                    <>
                        <DashboardCover text={data.name} />
                        <div className="py-3">
                            <p className="text-lg sm:text-2xl font-bold">{data.name}</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-5 2xl:gap-6 mt-8">

                            {/* Personal info */}
                            <div className="rounded-md shadow-lg bg-white min-h-[350px]">
                                <div className="border-b p-4">
                                    <p className="text-sm font-medium">Personal info.</p>
                                </div>
                                <div className="p-3">
                                    <div className="flex mb-2">
                                        <div className="w-[90px] md:w-[100px]">
                                            <p className="text-sm font-normal mb-2 text-gray-500">Username</p>
                                            <p className="text-sm font-normal mb-2 text-gray-500">E-mail</p>
                                            <p className="text-sm font-normal mb-2 text-gray-500">Country</p>
                                            <p className="text-sm font-normal mb-2 text-gray-500">Address</p>
                                            <p className="text-sm font-normal mb-2 text-gray-500">Publications</p>
                                        </div>

                                        <div className="grow">
                                            <p className="text-sm font-normal mb-2 text-gray-500">: {data.username}</p>
                                            <p className="text-sm font-normal mb-2 text-gray-500">: {data.email}</p>
                                            <p className="text-sm font-normal mb-2 text-gray-500">: {data.country}</p>
                                            <p className="text-sm font-normal mb-2 text-gray-500">: {data.address}</p>
                                            <p className="text-sm font-normal mb-2 text-gray-500">: {data.publications}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Work exp */}
                            <div className="rounded-md shadow-lg bg-white min-h-[350px]">
                                <div className="border-b w-full inline-flex justify-between p-3">
                                    <p className="text-sm font-medium mt-1">Work exp.</p>
                                    <button
                                        onClick={() => setWork({ show: true, loading: false })}
                                        className="p-1 bg-gray-50 rounded-full text-gray-600 transition-all hover:bg-gray-100 hover:text-black">
                                        <Plus size={18} />
                                    </button>
                                </div>
                                <div className="p-3">
                                    {data.work && data.work.length > 0 ?
                                        data.work.map((item, i) =>
                                            <div className="flex w-full p-2" key={i}>
                                                <div className="grow">
                                                    <p className="text-sm font-normal capitalize">{item.position}</p>
                                                    <p className="text-sm font-normal capitalize mb-1">{item.organization}</p>
                                                    <p className="text-xs font-normal text-gray-500">[{dateTodate(item.startFrom)} - {item.onGoing ? "CURRENT" : item.endTo ? dateTodate(item.endTo) : null}]</p>
                                                </div>
                                                <div>
                                                    <CircleIconButton
                                                        type="button"
                                                        className="!text-red-500"
                                                    >
                                                        <Trash2 size={18} />
                                                    </CircleIconButton>
                                                </div>
                                            </div>
                                        ) :
                                        <p className="text-[13px] font-regular text-gray-500">No work history added.</p>
                                    }
                                </div>
                            </div>

                            {/* Education */}
                            <div className="rounded-md shadow-lg bg-white min-h-[350px]">
                                <div className="border-b w-full inline-flex justify-between p-3">
                                    <p className="text-sm font-medium mt-1">Education</p>
                                    <button
                                        onClick={() => setEducation({ show: true, loading: false })}
                                        className="p-1 bg-gray-50 rounded-full text-gray-600 transition-all hover:bg-gray-100 hover:text-black">
                                        <Plus size={18} />
                                    </button>
                                </div>
                                <div className="p-3">
                                    {data.education && data.education.length > 0 ?
                                        data.education.map((item, i) =>
                                            <div className="flex w-full p-2" key={i}>
                                                <div className="grow">
                                                    <p className="text-sm font-normal capitalize">{item.school}</p>
                                                    <p className="text-sm font-normal mb-1">Department of {item.department}</p>
                                                    <p className="text-xs font-normal text-gray-500">[{item.passingYear}]</p>
                                                </div>
                                                <div>
                                                    <CircleIconButton
                                                        type="button"
                                                        className="!text-red-500"
                                                    >
                                                        <Trash2 size={18} />
                                                    </CircleIconButton>
                                                </div>
                                            </div>
                                        ) :
                                        <p className="text-xs font-normal text-gray-500">No education history added.</p>
                                    }
                                </div>
                            </div>

                            {/* Profiles */}
                            <div className="rounded-md shadow-lg bg-white min-h-[350px]">
                                <div className="border-b w-full inline-flex justify-between p-3">
                                    <p className="text-sm font-medium mt-1">Public profiles</p>
                                    <button
                                        className="p-1 bg-gray-50 rounded-full text-gray-600 transition-all hover:bg-gray-100 hover:text-black"
                                        onClick={() => setSocial({ show: true, loading: false })}
                                    >
                                        <Plus size={18} />
                                    </button>
                                </div>
                                <div className="p-3">
                                    {data.otherProfiles && data.otherProfiles.length > 0 ?
                                        data.otherProfiles.map((item, i) =>
                                            <div className="flex w-full p-2" key={i}>
                                                <div className="grow">
                                                    <p className="text-sm font-normal capitalize mb-1">{item.title}</p>
                                                    <p className="text-xs font-normal text-gray-500">{item.link}</p>
                                                </div>
                                                <div>
                                                    <CircleIconButton
                                                        type="button"
                                                        className="!text-red-500"
                                                    >
                                                        <Trash2 size={18} />
                                                    </CircleIconButton>
                                                </div>
                                            </div>
                                        ) :
                                        <p className="text-[13px] font-normal text-gray-500">No profiles added.</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                    : null
                }
            </DashboardLayout>

            {/* Work creation */}
            <Modal
                show={work.show}
                loading={work.loading}
                onHide={() => setWork({ ...work, show: false })}
                title="Create work"
            >
                <WorkForm
                    loading={work.loading}
                    onSubmit={data => console.log(data)}
                />
            </Modal>

            {/* Education creation */}
            <Modal
                show={education.show}
                loading={education.loading}
                onHide={() => setEducation({ ...education, show: false })}
                title="Create education"
            >
                <EducationForm
                    loading={work.loading}
                    onSubmit={data => console.log(data)}
                />
            </Modal>

            {/* Social profile creation */}
            <Modal
                show={social.show}
                loading={social.loading}
                onHide={() => setSocial({ ...social, show: false })}
                title="Create profile"
            >
                <SocialForm
                    loading={social.loading}
                    onSubmit={data => console.log(data)}
                />
            </Modal>
        </div>
    );
};

export default withAuth(index);


