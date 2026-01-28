import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";

const AcademicSemesterPage = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data);

  return (
    <div>
      <h1>This is academin semester component</h1>
    </div>
  );
};

export default AcademicSemesterPage;
