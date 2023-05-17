import "../../app/globals.css";
import Image from "next/image";
import { getUserData } from "@/api/requests";

export default function UserPage({ data }) {
  const { user, projects } = data;

  return (
    <div className="px-40 py-20 bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <div className="mb-8 items-center">
            <div className="rounded mb-10">
            <Image className="rounded-full" src={user.profile_photo} width={150} height={150} />
            </div>
            <div>
          <h1 className="text-5xl font-bold mb-2 text-slate-800">
            {user.display_name}
          </h1>
          <p className="text-md text-slate-800">{`Email: ${user.email}`}</p>
          <p className="text-md text-slate-800">{`Phone: +${user.phone.country_code} ${user.phone.number}`}</p>
          <p className="text-md text-slate-800">{`Address: ${user.residential_address.city}, ${user.residential_address.street_address}`}</p>
            </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-slate-800">My projects</h2>
          {projects.map((project: any) => (
            <div key={project.id} className="ml-4">
              <h3 className="text-2xl font-bold mb-1 text-slate-800">
                {project.name}
              </h3>
              <p className="text-slate-800">{`My role: ${project.role}`}</p>
              <p className="text-slate-800">{`About: ${project.description}`}</p>
              <p className="text-slate-800">{`Status: ${project.status}`}</p>
              <div className="bg-slate-800 h-px my-4 width-full"></div>
            </div>
          ))}
          <div className="flex items-center mb-4"></div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const id = ctx.params.id;
  const data = await getUserData(id as string);

  return { props: { data } };
}
