import { Outlet, useLocation } from "react-router-dom";
import Filter from "../filter/filter";
import { FormProvider, useForm } from "react-hook-form";
import { Suspense, useEffect } from "react";
import Spinner from "../spinner/spinner";
import useAuthStore from "@/services/store/Authstore";
import { checkPermission } from "@/common/lib/utils";

export default function Layout() {
  const { user } = useAuthStore();
  const { pathname } = useLocation();
  let ANNOTATE_TYPE = checkPermission(user?.role);

  const form = useForm({
    mode: "onChange",
    defaultValues: {
      annotate_type: ANNOTATE_TYPE,
      hospital_ids: [],
      services_ids: [],
      chart_date: {},
      service_id_nd: 4,
      service_id_st: 7,
      hospital_id_nd: 4,
      hospital_id_st: 1,
    },
  });

  useEffect(() => {
    form.reset();
    form.setValue("annotate_type", ANNOTATE_TYPE ? ANNOTATE_TYPE : "");
  }, [pathname]);

  return (
    <Suspense fallback={<Spinner />}>
      <FormProvider {...form}>
        <div className="bg-backg flex flex-col">
          <header className="header">
            <div className="header-container p-8">
              <div className="header-inner">
                <Filter />
              </div>
            </div>
          </header>

          <main className="grow">
            <div className="px-8 h-full">
              <Outlet />
            </div>
          </main>
        </div>
      </FormProvider>
    </Suspense>
  );
}
