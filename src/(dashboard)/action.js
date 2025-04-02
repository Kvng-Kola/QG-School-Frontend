import { api } from "./services/apiService";

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
// CRUD PROCESS FOR Lesson
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
export const createStudent = async (data, setState, state, image, setError) => {
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
    levelId,
    classId,
    parentId,
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
      parentId,
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
      parentId,
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
export const loginUser = async (data, setState) => {
  const { email, password } = data;
  try {
    const res = await api.post("/api/login", { email, password });
    console.log(res.data);
    return setState((prev) => ({
      ...prev,
      success: true,
      error: false,
    }));
  } catch (error) {
    console.log(error);
    if (error.response.data) {
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
