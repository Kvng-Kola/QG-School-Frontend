import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { api } from "../services/apiService";
import { toast } from "react-toastify";

export default function Menu() {
  const [logoutModal, setLogoutModal] = useState(false);
  const menuItems = [
    {
      title: "MENU",
      items: [
        {
          icon: <Icon icon="ic:outline-home" width="24" height="24" />,
          label: "Home",
          href: "/admin",
          visible: ["admin"],
        },
        {
          icon: <Icon icon="ic:outline-home" width="24" height="24" />,
          label: "Home",
          href: "/guardian",
          visible: ["guardian"],
        },
        {
          icon: <Icon icon="ic:outline-home" width="24" height="24" />,
          label: "Home",
          href: "/student",
          visible: ["student"],
        },
        {
          icon: <Icon icon="ic:outline-home" width="24" height="24" />,
          label: "Home",
          href: "/teacher",
          visible: ["teacher"],
        },
        {
          icon: <Icon icon="ph:chalkboard-teacher-fill" />,
          label: "Teachers",
          href: "/teacherslist",
          visible: ["admin", "teacher"],
        },
        {
          icon: <Icon icon="ph:student-light" />,
          label: "Students",
          href: "/studentslist",
          visible: ["admin", "guardian"],
        },
        {
          icon: <Icon icon="mdi:guardian-circle" />,
          label: "Parents",
          href: "/parentslist",
          visible: ["admin"],
        },
        {
          icon: <Icon icon="carbon:document-subject" />,
          label: "Subjects",
          href: "/subjectslist",
          visible: ["admin"],
        },
        {
          icon: <Icon icon="fluent:class-24-regular" />,
          label: "Classes",
          href: "/classlist",
          visible: ["admin", "teacher"],
        },
        {
          icon: <Icon icon="clarity:note-line" />,
          label: "Lessons",
          href: "/lessonlist",
          visible: ["admin", "teacher"],
        },
        {
          icon: <Icon icon="healthicons:i-exam-multiple-choice-outline" />,
          label: "Exams",
          href: "/examlist",
          visible: ["admin", "teacher", "student", "guardian"],
        },
        {
          icon: <Icon icon="si:assignment-line" />,
          label: "Assignments",
          href: "/assignmentlist",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: <Icon icon="carbon:result-new" />,
          label: "Results",
          href: "/resultlist",
          visible: ["admin", "teacher", "student", "guardian"],
        },
        {
          icon: <Icon icon="ic:round-event" />,
          label: "Events",
          href: "/eventlist",
          visible: ["admin", "teacher", "student", "guardian"],
        },
        {
          icon: <Icon icon="mdi:announcement-outline" />,
          label: "Announcements",
          href: "/announcementlist",
          visible: ["admin", "teacher", "student", "guardian"],
        },
      ],
    },
    {
      title: "OTHER",
      items: [
        {
          icon: <Icon icon="line-md:logout" />,
          label: "Logout",
          href: "#",
          visible: ["admin", "teacher", "student", "guardian"],
          showLogoutModal: () => {
            return setLogoutModal(true);
          },
        },
      ],
    },
  ];
  const { authUser } = useAuthContext();
  const role = authUser.role;
  return (
    <>
      <div className="mt-4 text-sm 2xl:text-base">
        {menuItems.map((i) => (
          <div className="flex flex-col gap-2" key={i.title}>
            <span className="hidden lg:block my-2 font-[540]">{i.title}</span>
            {i.items.map((item) => {
              if (item.visible.includes(role)) {
                return (
                  <NavLink
                    to={item.href}
                    key={item.label}
                    onClick={item?.showLogoutModal}
                    className="flex items-center justify-center lg:justify-start py-2 gap-2 rounded hover:bg-lamaSky "
                  >
                    <div className="text-[20px">{item.icon}</div>
                    <span className="hidden lg:block">{item.label}</span>
                  </NavLink>
                );
              }
            })}
          </div>
        ))}
      </div>
      <ShowLogoutModal modal={logoutModal} setModal={setLogoutModal} />
    </>
  );
}

const ShowLogoutModal = ({ modal, setModal }) => {
  const navigate = useNavigate();
  const handleUserLogout = () => {
    toast.success("Logout successfully", {
      onClose: () => {
        localStorage.clear();
        navigate("/login");
        navigate(0);
      },
      autoClose: 3000,
    });
    return;
  };
  return (
    <div
      className={`${
        modal ? "opacity-100 visible z-40 hide-scroll" : "opacity-0 invisible"
      } fixed inset-0 flex items-center justify-center cursor-[url(https://yomicasual.africa/wp-content/themes/minimog/assets/images/cursor/light-close.png),_pointer]`}
    >
      <div className="overlay" onClick={() => setModal(false)} />
      <div
        className={`${
          modal
            ? "opacity-100 visible z-50"
            : "opacity-0 invisible pointer-events-none"
        }opacity-100 max-w-[calc(100vw - 50px)] w-[400px] cursor-auto relative`}
      >
        <button
          onClick={() => setModal(false)}
          className="absolute transition-all top-0 right-0 -translate-y-1/2 translate-x-1/2 close-modal-button flex items-center justify-center w-[40px] h-[40px] rounded-full shadow-[0_4px_10px_#0000002b] bg-white text-[#563725] hover:bg-[#563725] hover:text-white z-50"
        >
          <Icon icon="hugeicons:cancel-01" width="18" height="18" />
        </button>
        <div className="modal-content-wrap opacity-100 visible z-50 max-h-[calc(100vh - 60px)] w-full h-full rounded-md bg-white overflow-auto">
          <div className="p-6 text-center">
            <h2 className="text-2xl ">Are you sure you want to Log out?</h2>
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={handleUserLogout}
                className="w-full py-1.5 ring-1 ring-secondaryDark300 text-secondaryDark300 rounded-lg text-base"
              >
                Log me out
              </button>
              <button
                onClick={() => setModal(false)}
                className="w-full py-1.5 ring-1 ring-secondaryDark300 bg-secondaryDark300 text-white rounded-lg text-base"
              >
                Stay logged in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
