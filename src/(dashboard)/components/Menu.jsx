import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { role } from "../Data";

export default function Menu() {
  const menuItems = [
    {
      title: "MENU",
      items: [
        {
          icon: <Icon icon="ic:outline-home" width="24" height="24" />,
          label: "Home",
          href: "/admin",
          visible: ["admin", "teacher", "student", "parent"],
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
          visible: ["admin", "teacher"],
        },
        {
          icon: <Icon icon="mdi:guardian-circle" />,
          label: "Parents",
          href: "/parentslist",
          visible: ["admin", "teacher"],
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
          visible: ["admin", "teacher", "student", "parent"],
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
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: (
            <img
              src="https://cdn-icons-png.flaticon.com/128/1286/1286827.png"
              alt=""
              className="w-[20px]"
            />
          ),
          label: "Attendance",
          href: "/list/attendance",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: <Icon icon="ic:round-event" />,
          label: "Events",
          href: "/eventlist",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: <Icon icon="ant-design:message-outlined" />,
          label: "Messages",
          href: "/list/messages",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: <Icon icon="mdi:announcement-outline" />,
          label: "Announcements",
          href: "/announcementlist",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
    {
      title: "OTHER",
      items: [
        {
          icon: <Icon icon="gg:profile" />,
          label: "Profile",
          href: "/profile",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: (
            <Icon icon="material-symbols:settings-account-box-outline-rounded" />
          ),
          label: "Settings",
          href: "/settings",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: <Icon icon="line-md:logout" />,
          label: "Logout",
          href: "/logout",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
  ];
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
                    className="flex items-center justify-center lg:justify-start py-2 gap-2 rounded hover:bg-lamaSky [&.active]:bg-black [&.active]:text-white"
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
    </>
  );
}
