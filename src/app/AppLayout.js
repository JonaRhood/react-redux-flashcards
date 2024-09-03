import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import ROUTES from "./routes";
import ResetAppButton from "../components/ResetAppButton";

export default function AppLayout() {
    const location = useLocation();
    const isNewQuizRoute = location.pathname === ROUTES.newQuizRoute();

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to={ROUTES.topicsRoute()} >
                            Topics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={ROUTES.quizzesRoute()} >
                            Quizzes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={ROUTES.newQuizRoute()} >
                            New Quiz
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div id="divOutlet">
                <Outlet />
            </div>
            {!isNewQuizRoute && <ResetAppButton />}
        </div>
    );
}
