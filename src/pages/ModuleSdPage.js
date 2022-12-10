import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from 'react-router-dom';
import { getActiveModules } from "../utils/local-data";
import ModulesList from "../components/ModuleSdList";
import SearchModules from "../components/SearchModules";


function ModulesPageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword') || '';
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <ModulePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class ModulePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getActiveModules(),
            keyword: props.defaultKeyword || '',
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });

        this.props.keywordChange(keyword);
    }

    render() {
        const Modules = this.state.notes.filter((module) => {
            return module.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });

        return (
            <section>
                <h2 className="pt-5">Daftar Materi</h2>
                <SearchModules keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <ModulesList Modules={Modules} />
            </section>
        );
    }
}

ModulePage.propTypes = {
    defaultKeyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired,
}

export default ModulesPageWrapper;