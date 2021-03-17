from rest_framework.views import exception_handler
from django.db import DatabaseError
from rest_framework.response import Response
import logging
logger = logging.getLogger("django")
from rest_framework import status

def custom_exception_handler(exc,context):
    '''
    自定义异常处理
    :param exc:  本次请求发生的异常信息
    :param context: 本次请求发送异常的执行上下文，【本次请求request请求，发送的时间等】
    :return:
    '''
    response = exception_handler(exc,DatabaseError)

    if response is None:
        """来到这两种情况，1程序没出错 2出错了django或者restframwork不识别"""
        view = context["view"]
        if isinstance(exc,DatabaseError):
            #数据库异常
            logger.error('[%s] %s' % (view,exc))
            response = Response({"message":"服务器内部错误"},status=status.HTTP_507_INSUFFICIENT_STORAGE)
    return response
