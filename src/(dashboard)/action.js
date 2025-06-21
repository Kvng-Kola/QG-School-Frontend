import { api } from "./services/apiService";

// HELPER OR UTILITY FUNCTIONS
const formatDateApi = (date) => {
  if (!date) return null;
  return date.toISOString().slice(0, 19).replace("T", " ");
};

// CRUD PROCESS FOR SUBJECTS
export const createSubject = async (data, setState, state) => {
  const { name, level, teacher } = data;
  try {
    await api.post(`/api/subjectRegister`, {
      name: name,
      level: level,
      teacher: teacher,
    });
    return setState({ ...state, success: true, error: false });
  } catch (error) {
    console.error(error);
    return setState({ ...state, success: false, error: true });
  }
};
export const UpdateSubject = async (data, setState, state) => {
  try {
    const { id, name, level, teacher } = data;
    await api.patch(`/api/subjectUpdate/${id}`, {
      name,
      level,
      teacher,
    });
    return setState({ ...state, success: true, error: false });
  } catch (error) {
    console.error(error);
    return setState({ ...state, success: false, error: true });
  }
};
export const deleteSubject = async (id, setSuccess) => {
  const subjectId = Number(id);
  console.log(subjectId);
  try {
    await api.delete(`/api/subjectDelete/${subjectId}`);
    return setSuccess(true);
  } catch (error) {
    console.log(error);
  }
};

// CRUD PROCESS FOR CLASS
export const createClass = async (data, setState, state) => {
  const { capacity, levelId, name, teacherId } = data;
  try {
    await api.post(`/api/classRegister`, {
      capacity: capacity,
      levelId: levelId,
      teacherId: teacherId,
      name: name,
    });
    return setState({ ...state, success: true, error: false });
  } catch (error) {
    console.error(error);
    return setState({ ...state, success: false, error: true });
  }
};
export const UpdateClass = async (data, setState, state) => {
  try {
    const { id, capacity, levelId, name, teacherId } = data;
    await api.patch(`/api/updateClass/${id}`, {
      name,
      id,
      capacity,
      levelId,
      teacherId,
    });
    return setState({ ...state, success: true, error: false });
  } catch (error) {
    console.error(error);
    return setState({ ...state, success: false, error: true });
  }
};
export const deleteClass = async (id, setSuccess) => {
  try {
    await api.delete(`/api/classDelete/${parseInt(id)}`);
    return setSuccess(true);
  } catch (error) {
    console.log(error);
  }
};

// CRUD PROCESS FOR LESSON
export const createLesson = async (data, setState, state) => {
  const { class_id, day, end_time, name, start_time, subject_id, teacher_id } =
    data;
  try {
    await api.post(`/api/createLesson`, {
      class_id,
      day,
      end_time,
      name,
      start_time,
      subject_id,
      teacher_id,
    });
    return setState({ ...state, success: true, error: false });
  } catch (error) {
    console.error(error);
    return setState({ ...state, success: false, error: true });
  }
};
export const UpdateLesson = async (data, setState, state) => {
  console.log(data);
  try {
    const {
      class_id,
      day,
      end_time,
      name,
      start_time,
      subject_id,
      teacher_id,
      id,
    } = data;
    await api.patch(`/api/updateLesson/${id}`, {
      class_id,
      day,
      end_time,
      name,
      start_time,
      subject_id,
      teacher_id,
    });
    return setState({ ...state, success: true, error: false });
  } catch (error) {
    console.error(error);
    return setState({ ...state, success: false, error: true });
  }
};
export const deleteLesson = async (id, setSuccess) => {
  try {
    await api.delete(`/api/deleteLesson/${parseInt(id)}`);
    return setSuccess(true);
  } catch (error) {
    console.log(error);
  }
};

// CRUD PROCESS FOR EXAM
export const createExam = async (data, setState, state) => {
  const { end_time, lesson_id, start_time, title } = data;
  try {
    await api.post(`/api/createExam`, {
      lesson_id,
      end_time,
      start_time,
      title,
    });
    return setState({ ...state, success: true, error: false });
  } catch (error) {
    console.error(error);
    return setState({ ...state, success: false, error: true });
  }
};
export const UpdateExam = async (data, setState, state) => {
  try {
    const { end_time, lesson_id, start_time, title, id } = data;
    await api.patch(`/api/updateExam/${id}`, {
      end_time,
      lesson_id,
      start_time,
      title,
    });
    return setState({ ...state, success: true, error: false });
  } catch (error) {
    console.error(error);
    return setState({ ...state, success: false, error: true });
  }
};
export const deleteExam = async (id, setSuccess) => {
  try {
    await api.delete(`/api/deleteExam/${parseInt(id)}`);
    return setSuccess(true);
  } catch (error) {
    console.log(error);
  }
};

// CRUD PROCESS FOR ASSIGNMENT
export const createAssignment = async (data, setState, state) => {
  const { due_date, lesson_id, start_date, title } = data;
  try {
    await api.post(`/api/createAssignment`, {
      lesson_id,
      due_date: formatDateApi(due_date),
      start_date: formatDateApi(start_date),
      title,
    });
    return setState({ ...state, success: true, error: false });
  } catch (error) {
    console.error(error);
    return setState({ ...state, success: false, error: true });
  }
};
export const UpdateAssignment = async (data, setState, state) => {
  try {
    const { due_date, lesson_id, start_date, title, id } = data;
    await api.patch(`/api/updateAssignment/${id}`, {
      lesson_id,
      due_date: formatDateApi(due_date),
      start_date: formatDateApi(start_date),
      title,
    });
    return setState({ ...state, success: true, error: false });
  } catch (error) {
    console.error(error);
    return setState({ ...state, success: false, error: true });
  }
};
export const deleteAssignment = async (id, setSuccess) => {
  try {
    await api.delete(`/api/deleteAssignment/${parseInt(id)}`);
    return setSuccess(true);
  } catch (error) {
    console.log(error);
  }
};

// CRUD PROCESS FOR RESULT
export const createResult = async (data, setState, state) => {
  const { assignment_id, exam_id, score } = data;
  const randomStudentId = Math.ceil(Math.random() * 50);
  console.log(randomStudentId);
  console.log(data);
  // try {
  //   await api.post(`/api/createResult`, {
  //     assignment_id,
  //     exam_id,
  //     score,
  //   });
  //   return setState({ ...state, success: true, error: false });
  // } catch (error) {
  //   console.error(error);
  //   return setState({ ...state, success: false, error: true });
  // }
};
export const UpdateResult = async (data, setState, state) => {
  try {
    const { due_date, lesson_id, start_date, title, id } = data;
    await api.patch(`/api/updateAssignment/${id}`, {
      lesson_id,
      due_date: formatDateApi(due_date),
      start_date: formatDateApi(start_date),
      title,
    });
    return setState({ ...state, success: true, error: false });
  } catch (error) {
    console.error(error);
    return setState({ ...state, success: false, error: true });
  }
};
export const deleteResult = async (id, setSuccess) => {
  try {
    await api.delete(`/api/deleteAssignment/${parseInt(id)}`);
    return setSuccess(true);
  } catch (error) {
    console.log(error);
  }
};

// CRUD PROCESS FOR EVENT
export const createEvent = async (data, setState, state) => {
  const { end_time, class_id, start_time, title, description } = data;
  try {
    await api.post(`/api/createEvent`, {
      class_id,
      end_time: formatDateApi(end_time),
      start_time: formatDateApi(start_time),
      title,
      description,
    });
    return setState({ ...state, success: true, error: false });
  } catch (error) {
    console.error(error);
    return setState({ ...state, success: false, error: true });
  }
};
export const UpdateEvent = async (data, setState, state) => {
  try {
    const { end_time, class_id, start_time, title, description, id } = data;
    await api.patch(`/api/updateEvent/${id}`, {
      class_id,
      end_time: formatDateApi(end_time),
      start_time: formatDateApi(start_time),
      title,
      description,
    });
    return setState({ ...state, success: true, error: false });
  } catch (error) {
    console.error(error);
    return setState({ ...state, success: false, error: true });
  }
};
export const deleteEvent = async (id, setSuccess) => {
  try {
    await api.delete(`/api/deleteEvent/${parseInt(id)}`);
    return setSuccess(true);
  } catch (error) {
    console.log(error);
  }
};

// CRUD PROCESS FOR ANNOUNCEMENT
export const createAnnouncement = async (data, setState, state) => {
  const { date, class_id, title, description } = data;
  try {
    await api.post(`/api/createAnnouncement`, {
      class_id,
      date: formatDateApi(date),
      title,
      description,
    });
    return setState({ ...state, success: true, error: false });
  } catch (error) {
    console.error(error);
    return setState({ ...state, success: false, error: true });
  }
};
export const UpdateAnnouncement = async (data, setState, state) => {
  try {
    const { date, class_id, title, description, id } = data;
    await api.patch(`/api/updateAnnouncement/${id}`, {
      class_id,
      date: formatDateApi(date),
      title,
      description,
    });
    return setState({ ...state, success: true, error: false });
  } catch (error) {
    console.error(error);
    return setState({ ...state, success: false, error: true });
  }
};
export const deleteAnnouncement = async (id, setSuccess) => {
  try {
    await api.delete(`/api/deleteAnnouncement/${parseInt(id)}`);
    return setSuccess(true);
  } catch (error) {
    console.log(error);
  }
};

// CRUD PROCESS FOR Teachers
export const createTeacher = async (data, setState, state, image, setError) => {
  console.log(data);
  const {
    firstname,
    lastname,
    email,
    password,
    phone,
    address,
    bloodType,
    dob,
    sex,
    subjects,
  } = data;
  try {
    await api.post(`/api/createTeacher`, {
      firstname,
      lastname,
      email,
      password,
      phone,
      address,
      bloodType,
      dob,
      sex,
      subjects,
      image,
    });
    return setState({ ...state, success: true, error: false });
  } catch (error) {
    console.error(error);
    if (error.response.data) {
      let errors = error.response.data.errors;
      errors.email
        ? setError((prev) => ({ ...prev, emailErr: errors.email[0] }))
        : setError((prev) => ({ ...prev, emailErr: "" }));
      errors.phone
        ? setError((prev) => ({ ...prev, phoneErr: errors.phone[0] }))
        : setError((prev) => ({ ...prev, phoneErr: "" }));
    }
    return setState({ ...state, success: false, error: true });
  }
};
export const UpdateTeacher = async (data, setState, setError) => {
  try {
    const {
      id,
      address,
      bloodType,
      dob,
      email,
      firstname,
      lastname,
      password,
      phone,
      sex,
      subjects,
    } = data;
    const res = await api.patch(`/api/updateTeacher/${parseInt(id)}`, {
      firstname,
      lastname,
      address,
      bloodType,
      dob,
      email,
      password,
      phone,
      sex,
      subjects,
    });
    console.log(res.data);
    return setState((prev) => ({ ...prev, success: true, error: false }));
  } catch (error) {
    console.error(error);
    if (error.response.data) {
      let errors = error.response.data.errors;
      errors.email
        ? setError((prev) => ({ ...prev, emailErr: errors.email[0] }))
        : setError((prev) => ({ ...prev, emailErr: "" }));
      errors.phone
        ? setError((prev) => ({ ...prev, phoneErr: errors.phone[0] }))
        : setError((prev) => ({ ...prev, phoneErr: "" }));
    }
    return setState({ ...state, success: false, error: true });
  }
};
export const deleteTeacher = async (id, setSuccess) => {
  try {
    await api.delete(`/api/deleteTeacher/${parseInt(id)}`);
    return setSuccess(true);
  } catch (error) {
    console.log(error);
  }
};
// CRUD PROCESS FOR Student
export const createStudent = async (
  data,
  setState,
  state,
  image,
  setError,
  role,
  authUser
) => {
  const parentId = role === "guardian" ? authUser.user.id : null;
  const {
    firstname,
    lastname,
    email,
    password,
    phone,
    address,
    bloodType,
    dob,
    sex,
    levelId,
    classId,
  } = data;
  try {
    await api.post(`/api/createStudent`, {
      firstname,
      lastname,
      email,
      password,
      phone,
      address,
      bloodType,
      dob,
      sex,
      levelId,
      image,
      classId,
      parentId,
    });

    return setState({ ...state, success: true, error: false });
  } catch (error) {
    console.error(error);
    if (error.response.data) {
      let errors = error.response.data.errors;
      errors?.email
        ? setError((prev) => ({ ...prev, emailErr: errors.email[0] }))
        : setError((prev) => ({ ...prev, emailErr: "" }));
      errors?.phone
        ? setError((prev) => ({ ...prev, phoneErr: errors.phone[0] }))
        : setError((prev) => ({ ...prev, phoneErr: "" }));
    }
    return setState({ ...state, success: false, error: true });
  }
};
export const UpdateStudent = async (data, setState, setError) => {
  try {
    const {
      id,
      address,
      bloodType,
      dob,
      email,
      firstname,
      lastname,
      password,
      phone,
      sex,
      levelId,
      classId,
    } = data;
    await api.patch(`/api/updateStudent/${parseInt(id)}`, {
      firstname,
      lastname,
      address,
      bloodType,
      dob,
      email,
      password,
      phone,
      sex,
      levelId,
      classId,
    });
    return setState((prev) => ({ ...prev, success: true, error: false }));
  } catch (error) {
    console.error(error);
    if (error.response.data) {
      let errors = error.response.data.errors;
      errors?.email
        ? setError((prev) => ({ ...prev, emailErr: errors.email[0] }))
        : setError((prev) => ({ ...prev, emailErr: "" }));
      errors?.phone
        ? setError((prev) => ({ ...prev, phoneErr: errors.phone[0] }))
        : setError((prev) => ({ ...prev, phoneErr: "" }));
    }
    return setState((prev) => ({ ...prev, success: false, error: true }));
  }
};
export const deleteStudent = async (id, setSuccess) => {
  try {
    await api.delete(`/api/deleteStudent/${parseInt(id)}`);
    return setSuccess(true);
  } catch (error) {
    console.log(error);
  }
};
// CRUD PROCESS FOR PARENT
export const createParent = async (data, setState, state, setError) => {
  console.log(data);
  const { firstname, lastname, email, password, phone, address, sex } = data;
  try {
    await api.post(`/api/createParent`, {
      firstname,
      lastname,
      email,
      password,
      phone,
      address,
      sex,
    });

    return setState({ ...state, success: true, error: false });
  } catch (error) {
    console.error(error);
    if (error.response.data) {
      let errors = error.response.data.errors;
      errors?.email
        ? setError((prev) => ({ ...prev, emailErr: errors.email[0] }))
        : setError((prev) => ({ ...prev, emailErr: "" }));
      errors?.phone
        ? setError((prev) => ({ ...prev, phoneErr: errors.phone[0] }))
        : setError((prev) => ({ ...prev, phoneErr: "" }));
    }
    return setState({ ...state, success: false, error: true });
  }
};
export const UpdateParent = async (data, setState, setError) => {
  try {
    const { id, address, email, firstname, lastname, password, phone, sex } =
      data;
    await api.patch(`/api/updateParent/${parseInt(id)}`, {
      firstname,
      lastname,
      address,
      email,
      password,
      phone,
      sex,
    });
    return setState((prev) => ({ ...prev, success: true, error: false }));
  } catch (error) {
    console.error(error);
    if (error.response.data) {
      let errors = error.response.data.errors;
      errors?.email
        ? setError((prev) => ({ ...prev, emailErr: errors.email[0] }))
        : setError((prev) => ({ ...prev, emailErr: "" }));
      errors?.phone
        ? setError((prev) => ({ ...prev, phoneErr: errors.phone[0] }))
        : setError((prev) => ({ ...prev, phoneErr: "" }));
    }
    return setState((prev) => ({ ...prev, success: false, error: true }));
  }
};
export const deleteParent = async (id, setSuccess) => {
  try {
    await api.delete(`/api/deleteParent/${parseInt(id)}`);
    return setSuccess(true);
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (data, setError) => {
  const { firstname, lastname, email, password, confirmPassword } = data;
  try {
    await api.post("/api/register", {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
    });
    return setError((prev) => ({ ...prev, success: true, error: false }));
  } catch (error) {
    console.log(error);
    if (error.response.data) {
      let errors = error.response.data.errors;
      errors?.email
        ? setError((prev) => ({ ...prev, emailErr: errors.email[0] }))
        : setError((prev) => ({ ...prev, emailErr: "" }));
    }
    return setError((prev) => ({ ...prev, success: false, error: true }));
  }
};
export const loginUser = async (
  data,
  setState,
  getAuthenticatedUserInfo,
  navigate,
  toast,
  role
) => {
  const { email, password } = data;
  try {
    const res = await api.post("/api/login", { email, password });
    const { token, type } = res.data;
    getAuthenticatedUserInfo(token);
    toast.success(`Login successfully`, {
      autoClose: 2000,
      onClose: () => {
        if (role) {
          switch (role) {
            case "admin":
              navigate("/dashboard");
              break;
            case "teacher":
              navigate("/teacher");
              break;
            case "student":
              navigate("/student");
              break;
            case "guardian":
              navigate("/parent");
              break;
            default:
              break;
          }
        }
      },
    });
  } catch (error) {
    console.log(error);
    if (error.response?.data) {
      let message = error.response?.data?.message;
      if (message)
        setState((prev) => ({
          ...prev,
          success: false,
          error: true,
          setResponse: message,
        }));
    }
  }
};
