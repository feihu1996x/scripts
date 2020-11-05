db.cc_user_limit_in_vue.find({});
db.cc_user_limit_in_vue.remove({});
db.cc_user_limit_in_vue.insert({
    "limits": [
        {
            "id": "nav_workbench",
            "name": "工作台"
        },
        {
            "id": "nav_ai_call",
            "name": "智能导航"
        },
        {
            "id": "nav_call",
            "name": "通话",
            "open": true,
            "children": [
                {
                    "name": "查询通话",
                    "id": "func_cdr_search"
                },
                {
                    "name": "导出通话记录/录音",
                    "id": "func_export_cdr"
                },
                {
                    "name": "提交批量导出录音任务",
                    "id": "call_sheet_export_monitor_task"
                },
                {
                    "name": "通话标签",
                    "id": "func_mark_cdr"
                },
                {
                    "name": "提交质检录音",
                    "id": "func_submit_to_quality_check"
                },
                {
                    "name": "分配未接来电",
                    "id": "call_sheet_leak"
                },
                {
                    "name": "批量导出录音任务",
                    "id": "batch_export_record_task"
                }
            ]
        },
        {
            "name": "在线咨询",
            "id": "nav_webchat",
            "open": true,
            "children": [
                {
                    "name": "基本功能",
                    "id": "func_webchat_basic"
                },
                {
                    "name": "会话抢接",
                    "id": "func_webchat_grab"
                },
                {
                    "name": "结束待领取会话",
                    "id": "func_finish_undeal_session"
                },
                {
                    "name": "机器人会话",
                    "id": "func_robot_session"
                }
            ]
        },
        {
            "id": "nav_customer",
            "name": "客户",
            "open": true,
            "children": [
                {
                    "name": "查询客户",
                    "id": "func_customer_search"
                },
                {
                    "name": "导出查询结果",
                    "id": "func_customer_export"
                },
                {
                    "name": "分配查询结果",
                    "id": "func_customer_assign"
                },
                {
                    "name": "删除查询结果",
                    "id": "func_customer_delete"
                },
                {
                    "name": "提交批量录音下载任务",
                    "id": "func_customer_export_batch_monitor"
                },
                {
                    "name": "导出通话记录",
                    "id": "func_customer_export_cdr"
                },
                {
                    "name": "转移客户",
                    "id": "func_customer_convert"
                },
                {
                    "name": "客户合并",
                    "id": "func_customer_merge"
                },
                {
                    "name": "禁止修改状态",
                    "id": "func_not_update_customer_status"
                },
                {
                    "name": "禁止修改来源",
                    "id": "func_not_update_customer_increase"
                },
                {
                    "name": "禁止修改客户信息",
                    "id": "func_not_modify_customer_info"
                }
            ]
        },
        {
            "name": "工单",
            "id": "nav_business",
            "open": true,
            "children": [
                {
                    "name": "查询工单",
                    "id": "func_task_search"
                },
                {
                    "name": "导出工单",
                    "id": "func_task_export"
                },
                {
                    "name": "删除工单",
                    "id": "func_task_delete"
                },
                {
                    "name": "退回新建工单",
                    "id": "func_task_sendback_new"
                },
                {
                    "name": "工单备注",
                    "id": "func_task_remark_business"
                }
            ]
        },
        {
            "id": "nav_km",
            "name": "知识库",
            "open": true,
            "children": [
                {
                    "name": "查询知识库",
                    "id": "func_km_search"
                },
                {
                    "name": "知识库配置",
                    "id": "func_km_config"
                },
                {
                    "name": "禁止删除知识库内容",
                    "id": "func_not_remove_km_content"
                },
                {
                    "name": "知识库导入",
                    "id": "func_km_import"
                }
            ]
        },
        {
            "id": "nav_busReport",
            "name": "统计报表"
        },
        {
            "id": "nav_infoConfirm",
            "name": "信息核实单"
        },
        {
            "id": "nav_examine",
            "name": "考核",
            "open": true,
            "children": [
                {
                    "name": "响应及时",
                    "id": "res_time_examine"
                },
                {
                    "name": "投诉关闭",
                    "id": "complain_close_examine"
                },
                {
                    "name": "有责投诉",
                    "id": "complain_examine"
                },
                {
                    "name": "信息准确",
                    "id": "info_examine"
                },
                {
                    "name": "我的申诉",
                    "id": "my_complain_examine"
                },
                {
                    "name": "我的审核",
                    "id": "my_examine_examine"
                },
                {
                    "name": "设置",
                    "id": "config_examine"
                },
                {
                    "name": "统计",
                    "id": "report_examine"
                }
            ]
        },
        {
            "id": "nav_monitor",
            "name": "监控",
            "open": true,
            "children": [
                {
                    "name": "平台监控",
                    "id": "monitor_platform"
                },
                {
                    "name": "图表监控",
                    "id": "monitor_chart"
                },
                {
                    "name": "坐席状态日志",
                    "id": "monitor_log_record"
                },
                {
                    "id": "monitor_remote_assist",
                    "name": "远程桌面控制监控"
                }
            ]
        },
        {
            "id": "nav_report",
            "name": "报表",
            "open": true,
            "children": [
                {
                    "id": "call_report",
                    "name": "通话报表",
                    "open": true,
                    "children": [
                        {
                            "id": "callin_report",
                            "name": "呼入时间趋势报表"
                        },
                        {
                            "id": "call_report_relay_area",
                            "name": "呼入地域分布报表"
                        },
                        {
                            "id": "callout_report",
                            "name": "呼出时间趋势报表"
                        },
                        {
                            "name": "呼出地域分布报表",
                            "id": "call_report_dialout_area"
                        },
                        {
                            "id": "queue_report",
                            "name": "技能组对比报表"
                        },
                        {
                            "name": "技能组时间趋势报表",
                            "id": "call_report_queue_time"
                        },
                        {
                            "id": "call_report_agent",
                            "name": "座席工作量报表"
                        },
                        {
                            "name": "座席满意度调查报表",
                            "id": "call_report_approve_survey"
                        }
                    ]
                },
                {
                    "id": "im_report",
                    "name": "在线客服报表",
                    "open": true,
                    "children": [
                        {
                            "id": "im_report_msg",
                            "name": "在线客服消息报表"
                        },
                        {
                            "id": "im_report_bus",
                            "name": "在线客服业务分析报表"
                        },
                        {
                            "id": "im_report_agent",
                            "name": "在线客服座席工作量报表"
                        }
                    ]
                },
                {
                    "id": "mail_report",
                    "name": "邮件报表",
                    "open": true,
                    "children": [
                        {
                            "id": "mail_report_agent",
                            "name": "邮件座席工作量报表"
                        },
                        {
                            "id": "mail_report_category",
                            "name": "邮件分类报表"
                        }
                    ]
                },
                {
                    "id": "customer_report",
                    "name": "客户报表",
                    "open": true,
                    "children": [
                        {
                            "id": "customer_report_increase",
                            "name": "客户来源分析报表"
                        }
                    ]
                },
                {
                    "id": "business_report",
                    "name": "工单报表",
                    "open": true,
                    "children": [
                        {
                            "id": "business_report_analyse",
                            "name": "工单分析报表"
                        },
                        {
                            "id": "business_report_agent",
                            "name": "工单座席工作量报表"
                        }
                    ]
                },
                {
                    "id": "ques_report",
                    "name": "问卷报表",
                    "open": true,
                    "children": [
                        {
                            "id": "ques_report_result",
                            "name": "问卷回访状态报表"
                        },
                        {
                            "id": "ques_report_answer",
                            "name": "问卷问题明细报表"
                        },
                        {
                            "id": "ques_report_call",
                            "name": "回访问卷工时统计报表"
                        },
                        {
                            "id": "ques_report_times",
                            "name": "座席外拨频次报表"
                        }
                    ]
                },
                {
                    "id": "robot_report",
                    "name": "机器人报表",
                    "open": true,
                    "children": [
                        {
                            "id": "robot_report_message",
                            "name": "机器人消息报表"
                        },
                        {
                            "id": "robot_report_top20",
                            "name": "热点问题top20"
                        }
                    ]
                },
                {
                    "id": "remote_control_report",
                    "name": "远程连接报表",
                    "open": true,
                    "children": [
                        {
                            "id": "remote_control_agent",
                            "name": "座席工作量报表"
                        },
                        {
                            "id": "remote_control_service",
                            "name": "远程服务报表"
                        }
                    ]
                }
            ]
        },
        {
            "id": "nav_questionnaire",
            "name": "问卷调查",
            "open": true,
            "children": [
                {
                    "name": "分配问卷",
                    "id": "func_questionnaire_assign"
                },
                {
                    "name": "导出问卷",
                    "id": "func_questionnaire_export"
                },
                {
                    "name": "删除问卷",
                    "id": "func_questionnaire_delete"
                }
            ]
        },
        {
            "id": "nav_qualityCheck",
            "name": "质检",
            "open": true,
            "children": [
                {
                    "name": "质检",
                    "id": "func_quality_check"
                },
                {
                    "name": "质检结果查询",
                    "id": "func_quality_check_list_query"
                },
                {
                    "name": "座席质检查询",
                    "id": "func_quality_check_query"
                },
                {
                    "name": "质检任务监测",
                    "id": "func_quality_task_monitor"
                },
                {
                    "name": "质检周期查询",
                    "id": "func_quality_check_period"
                },
                {
                    "name": "AI语音质检分析",
                    "id": "func_ai_quality_check"
                },                
            ]
        },
        {
            "id": "nav_email",
            "name": "邮件"
        },
        {
            "id": "nav_sms",
            "name": "短信",
            "open": true,
            "children": [
                {
                    "id": "my_sms",
                    "name": "我的短信"
                },
                {
                    "id": "all_sms",
                    "name": "所有短信"
                },
                {
                    "id": "batch_send_sms",
                    "name": "群发短信"
                },
                {
                    "name": "导入群发短信",
                    "id": "import_batch_send_sms"
                }
            ]
        },
        {
            "name": "首页对接",
            "id": "nav_url_interface"
        },
        {
            "id": "nav_config",
            "name": "设置",
            "open": true,
            "children": [
                {
                    "name": "账户信息",
                    "id": "company_identity"
                },
                {
                    "name": "安全设置",
                    "id": "account_config"
                },
                {
                    "name": "渠道设置",
                    "id": "config_channel",
                    "children": [
                        {
                            "id": "channel_skill_group",
                            "name": "渠道技能组"
                        },
                        {
                            "id": "call_config",
                            "name": "电话客服",
                            "children": [
                                {
                                    "id": "service_number_manage",
                                    "name": "服务号管理"
                                },
                                {
                                    "id": "schedule_config",
                                    "name": "日程设置"
                                },
                                {
                                    "id": "process_manage",
                                    "name": "流程管理"
                                },
                                {
                                    "id": "speech_library",
                                    "name": "语音库"
                                },
                                {
                                    "id": "black_red_list",
                                    "name": "黑红名单"
                                },
                                {
                                    "id": "call_config_label",
                                    "name": "通话标签"
                                },
                                {
                                    "id": "service_quality_label",
                                    "name": "服务质量标签"
                                },
                                {
                                    "id": "call_satisfaction_config",
                                    "name": "满意度设置"
                                }
                            ]
                        },
                        {
                            "id": "website_insert",
                            "name": "网站/WAP/H5客服"
                        },
                        {
                            "id": "app_insert",
                            "name": "移动APP客服"
                        },
                        {
                            "id": "wechat_insert",
                            "name": "微信客服"
                        },
                        {
                            "id": "wxmini_insert",
                            "name": "微信小程序客服"
                        },
                        {
                            "id": "weibo_insert",
                            "name": "微博客服"
                        },
                        {
                            "id": "email_insert",
                            "name": "邮件客服"
                        },
                        {
                            "id": "website_global_config",
                            "name": "在线咨询全局设置"
                        },
                        {
                            "id": "video_insert",
                            "name": "视频设置"
                        },
                        {
                            "id": "sms_config",
                            "name": "短信&闪信",
                            "open": true,
                            "children": [
                                {
                                    "id": "sms_template_query",
                                    "name": "短信模板查询"
                                },
                                {
                                    "id": "hangup_sms",
                                    "name": "挂机短信"
                                }
                            ]
                        },
                        {
                            "id": "im_docking_config",
                            "name": "在线咨询开放接口"
                        }
                    ]
                },
                {
                    "name": "部门及坐席配置",
                    "id": "dept_config",
                    "open": true,
                    "children": [
                        {
                            "id": "func_dept_add",
                            "name": "部门添加"
                        },
                        {
                            "id": "func_dept_delete",
                            "name": "部门删除"
                        },
                        {
                            "id": "func_dept_update",
                            "name": "部门修改"
                        },
                        {
                            "id": "func_dept_move",
                            "name": "部门移动"
                        }
                    ]
                },
                {
                    "name": "客户配置",
                    "id": "customer_config",
                    "open": true,
                    "children": [
                        {
                            "id": "customer_status",
                            "name": "客户模板"
                        },
                        {
                            "id": "customer_import",
                            "name": "客户导入"
                        }
                    ]
                },
                {
                    "name": "工单设置",
                    "id": "task_config"
                },
                {
                    "name": "质检设置",
                    "id": "config_quality_check_template",
                    "open": true
                },
                {
                    "name": "机器人设置",
                    "id": "robot_config",
                    "open": true
                },
                {
                    "name": "智能机器人配置",
                    "id": "ai_robot_config",
                    "open": true
                },
                {
                    "name": "问卷调查设置",
                    "id": "questionnaire_config_info",
                    "open": true,
                    "children": [
                        {
                            "name": "问卷配置",
                            "id": "questionnaire_config"
                        },
                        {
                            "name": "问卷导入",
                            "id": "questionnaire_impport"
                        },
                        {
                            "name": "客户样本选择",
                            "id": "customer_sample_choice"
                        },
                        {
                            "name": "回访任务管理",
                            "id": "visit_task_manager"
                        },
                        {
                            "name": "经销商设置",
                            "id": "dealer_config"
                        }
                    ]
                },
                {
                    "name": "对接",
                    "id": "config_interface",
                    "open": true,
                    "children": [
                        {
                            "id": "call_in_interface",
                            "name": "来电对接"
                        },
                        {
                            "id": "home_page_interface",
                            "name": "首页对接"
                        },
                        {
                            "id": "customer_tab_interface",
                            "name": "客户TAB页对接"
                        },
                        {
                            "id": "call_out_interface",
                            "name": "外呼对接"
                        },
                        {
                            "id": "global_config_interface",
                            "name": "对接全局配置"
                        },
                        {
                            "id": "interface_add_call_event_pane",
                            "name": "通话事件"
                        }
                    ]
                },
                {
                    "name": "公告设置",
                    "id": "system_notice",
                    "open": true,
                    "children": [
                        {
                            "id": "show_system_notice",
                            "name": "查看公告"
                        },
                        {
                            "id": "create_system_notice",
                            "name": "添加公告"
                        },
                        {
                            "id": "edit_system_notice",
                            "name": "修改公告"
                        },
                        {
                            "id": "delete_system_notice",
                            "name": "删除公告"
                        }
                    ]
                },
                {
                    "name": "字典配置",
                    "id": "dic_config"
                },
                {
                    "name": "第三方应用",
                    "id": "third_party_app_config"
                },
                {
                    "id": "operate_log",
                    "name": "日志管理"
                },
                {
                    "name": "工单其他设置",
                    "id": "task_others_config"
                }
            ]
        },
        {
            "name": "去简单版设置",
            "id": "show_simple_config"
        },
        {
            "id": "simple_config",
            "name": "简单版设置",
            "open": true,
            "children": [
                {
                    "id": "simple_company_identity",
                    "name": "账户信息"
                },
                {
                    "id": "simple_operate_log",
                    "name": "客服操作日志"
                },
                {
                    "id": "simple_account_config",
                    "name": "登录安全设置"
                },
                {
                    "id": "simple_dept_config",
                    "name": "座席管理",
                    "open": true,
                    "children": [
                        {
                            "id": "simple_func_dept_add",
                            "name": "部门添加"
                        },
                        {
                            "id": "simple_func_dept_delete",
                            "name": "部门删除"
                        },
                        {
                            "id": "simple_func_dept_update",
                            "name": "部门修改"
                        },
                        {
                            "id": "simple_func_dept_move",
                            "name": "部门移动"
                        }
                    ]
                },
                {
                    "id": "simple_channel_skill_group",
                    "name": "技能组管理",
                    "open": "true",
                    "children": [
                        {
                            "id": "simple_channel_call",
                            "name": "电话技能组"
                        },
                        {
                            "id": "simple_channel_webchat",
                            "name": "在线技能组"
                        },
                        {
                            "id": "simple_channel_email",
                            "name": "邮件技能组"
                        }
                    ]
                },
                {
                    "id": "simple_online_joinin",
                    "name": "在线接入",
                    "open": true,
                    "children": [
                        {
                            "id": "simple_wechat_insert",
                            "name": "微信接入"
                        },
                        {
                            "id": "simple_wxmini_insert",
                            "name": "微信小程序接入"
                        },
                        {
                            "id": "simple_website_insert",
                            "name": "网站接入"
                        },
                        {
                            "id": "simple_app_insert",
                            "name": "APP接入"
                        },
                        {
                            "id": "simple_weibo_insert",
                            "name": "微博接入"
                        }
                    ]
                },
                {
                    "id": "simple_website_global_config",
                    "name": "在线服务设置",
                    "open": true,
                    "children": [
                        {
                            "id": "simple_website_satisfaction_config",
                            "name": "满意度设置"
                        },
                        {
                            "id": "simple_finish_webchat_config",
                            "name": "结束会话设置"
                        },
                        {
                            "id": "simple_public_quick_reply_config",
                            "name": "公共快捷回复设置"
                        },
                        {
                            "id": "simple_webchat_blacklist_config",
                            "name": "在线黑名单管理"
                        }
                    ]
                },
                {
                    "id": "simple_call_center",
                    "name": "呼叫中心设置",
                    "open": true,
                    "children": [
                        {
                            "id": "simple_black_red_list",
                            "name": "黑红名单"
                        },
                        {
                            "id": "simple_call_config_label",
                            "name": "通话标签"
                        },
                        {
                            "id": "simple_call_satisfaction_config",
                            "name": "满意度设置"
                        }
                    ]
                },
                {
                    "id": "simple_system_notice",
                    "name": "公告管理",
                    "open": true,
                    "children": [
                        {
                            "id": "simple_show_system_notice",
                            "name": "查看公告"
                        },
                        {
                            "id": "simple_create_system_notice",
                            "name": "添加公告"
                        },
                        {
                            "id": "simple_edit_system_notice",
                            "name": "修改公告"
                        },
                        {
                            "id": "simple_delete_system_notice",
                            "name": "删除公告"
                        }
                    ]
                },
                {
                    "id": "simple_config_guide",
                    "name": "更多设置引导"
                }
            ]
        },
        {
            "name": "其他功能",
            "id": "other_module",
            "open": true,
            "children": [
                {
                    "name": "隐藏号码",
                    "id": "func_hide_tel"
                },
                {
                    "name": "监控修改并发",
                    "id": "func_monitor_updateLimit"
                },
                {
                    "name": "禁止修改客户归属",
                    "id": "func_not_allow_user_edit_owner"
                },
                {
                    "name": "弹屏可修改无归属的客户",
                    "id": "func_popup_commonCust_owner"
                },
                {
                    "name": "新增客户默认为无归属",
                    "id": "func_cust_owner_empty"
                },
                {
                    "name": "软电话条显示发短信按钮",
                    "id": "func_sort_phone_bar_send_sms"
                },
                {
                    "name": "座席个人设置中禁止修改后处理时长",
                    "id": "func_user_edit_no_auto_busy_time"
                },
                {
                    "name": "通话记录中禁止下载录音",
                    "id": "func_user_call_sheet_download_file"
                },
                {
                    "name": "通话记录中禁止听录音",
                    "id": "func_user_call_sheet_listen_file"
                },
                {
                    "name": "隐藏软电话条转满意度调查默认选项",
                    "id": "func_investigate_default_option_hide"
                },
                {
                    "name": "开启外呼弹屏",
                    "id": "func_dial_popup"
                },
                {
                    "name": "禁止座席修改个人信息",
                    "id": "func_not_allow_user_edit_info"
                },
                {
                    "name": "禁止修改客户配置为不能修改的字段",
                    "id": "func_not_update_customer_fields"
                },
                {
                    "name": "禁止联系历史通话备注和联系计划备注的编辑",
                    "id": "func_not_edit_remark_field"
                },
                {
                    "name": "禁止坐席查看公共通话记录",
                    "id": "func_not_allow_public_record"
                },
                {
                    "name": "禁止添加通话黑名单",
                    "id": "func_not_allow_add_blacklist"
                },
                {
                    "name": "我忙碌时，不允许别人转接给我或咨询我",
                    "id": "func_not_allow_busy_transfer_or_consult"
                },
                {
                    "name": "远程桌面控制功能",
                    "id": "func_remote_assist"
                },
                {
                    "name": "隐藏对接tab页",
                    "id": "func_hide_tab"
                }
            ]
        }
    ]
});